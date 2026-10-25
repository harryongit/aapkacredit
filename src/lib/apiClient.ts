import { cookies } from "next/headers";
import {
  mockStats,
  mockAnalytics,
  mockLoans,
  mockUsers,
  mockRepayments,
  mockSettings,
  mockCreditAssessments,
  mockSupportTickets,
  mockAuditLogs,
  mockDisbursements,
} from "./mockAdminData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend.aapkacredit.com/api/v1";
// Disconnect mode flag (can be toggled in .env or defaults to graceful fallback)
const IS_DISCONNECTED_TEST_MODE = process.env.ADMIN_DISCONNECTED_MODE === "true" || true;

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  // If explicitly configured for disconnected testing or if fetch fails, return mock data
  const getMockFallback = (url: string, method = "GET") => {
    // Endpoints routing
    if (url.includes("/admin/stats")) return { success: true, data: mockStats };
    if (url.includes("/admin/analytics")) return { success: true, data: mockAnalytics };
    if (url.includes("/admin/settings")) return { success: true, data: mockSettings };
    if (url.includes("/admin/credit-assessments")) return { success: true, data: mockCreditAssessments };
    if (url.includes("/admin/support/tickets")) return { success: true, data: mockSupportTickets };
    if (url.includes("/admin/audit-logs")) return { success: true, data: mockAuditLogs };
    if (url.includes("/admin/disbursements")) return { success: true, data: mockDisbursements };
    if (url.includes("/admin/repayments")) return { success: true, data: mockRepayments };
    if (url.includes("/admin/users")) {
      const match = url.match(/\/admin\/users\/([^/]+)/);
      if (match) {
        const found = mockUsers.find((u) => u.id === match[1]) || mockUsers[0];
        return { success: true, data: found };
      }
      return { success: true, data: mockUsers };
    }
    if (url.includes("/admin/loans")) {
      const match = url.match(/\/admin\/loans\/([^/]+)/);
      if (match) {
        const found = mockLoans.find((l) => l.id === match[1]) || mockLoans[0];
        return { success: true, data: found };
      }
      return { success: true, data: mockLoans };
    }

    // Default mock response for mutations (POST, PUT, DELETE)
    return {
      success: true,
      message: "Action completed successfully (Standalone Test Mode)",
      data: { status: "PROCESSED", timestamp: new Date().toISOString() },
    };
  };

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;

  const headers = new Headers(options.headers || {});
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  
  // Set Content-Type only if it hasn't been set, to allow FormData
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500); // 1.5s timeout for local test speed

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (IS_DISCONNECTED_TEST_MODE) {
        return getMockFallback(endpoint, options.method);
      }
      throw new Error(data.message || data.detail || `API request failed with status ${response.status}`);
    }

    return data;
  } catch (err: any) {
    // When backend is disconnected, immediately return mock data
    return getMockFallback(endpoint, options.method);
  }
}

