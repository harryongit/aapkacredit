import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET || "aapkacredit-super-secret-key-change-in-prod";
const encodedKey = new TextEncoder().encode(secretKey);

export async function signJWT(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function verifyJWT(token: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function getSession() {
  const session = (await cookies()).get("admin_session")?.value;
  if (!session) return null;
  return await verifyJWT(session);
}
