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
  mockSubadmins,
  mockDossiers,
} from "./mockAdminData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
// Disconnect mode flag (can be explicitly enabled with ADMIN_DISCONNECTED_MODE=true for offline development)
const IS_DISCONNECTED_TEST_MODE = process.env.ADMIN_DISCONNECTED_MODE === "true";

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
    if (url.includes("/admin/subadmins")) {
      return {
        success: true,
        data: mockSubadmins,
        meta: {
          total_subadmins: mockSubadmins.length,
          active_count: mockSubadmins.filter((s) => s.is_active).length,
          total_audits_logged: mockSubadmins.reduce((sum, s) => sum + s.total_audits_performed, 0),
        },
      };
    }
    if (url.includes("/dossier")) {
      const match = url.match(/\/admin\/loans\/([^/]+)\/dossier/);
      const loanId = match ? match[1] : "APP-1029";
      const dossier = mockDossiers[loanId] || mockDossiers["APP-1029"];
      return { success: true, data: dossier };
    }
    if (url.includes("/audit") && method === "POST") {
      return {
        success: true,
        message: "Manual underwriting audit verification logged successfully",
        data: { is_audited: true, audited_at: new Date().toISOString() },
      };
    }
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
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout for live backend response

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    const isSensitiveUnderwriting =
      endpoint.includes("/dossier") ||
      endpoint.includes("/audit") ||
      endpoint.includes("/approve") ||
      endpoint.includes("/reject") ||
      endpoint.includes("/disburse");

    if (!response.ok) {
      if (IS_DISCONNECTED_TEST_MODE && !isSensitiveUnderwriting) {
        return getMockFallback(endpoint, options.method);
      }
      throw new Error(data.message || data.detail || `API request failed with status ${response.status}`);
    }

    return data;
  } catch (err: any) {
    const isSensitiveUnderwriting =
      endpoint.includes("/dossier") ||
      endpoint.includes("/audit") ||
      endpoint.includes("/approve") ||
      endpoint.includes("/reject") ||
      endpoint.includes("/disburse");

    // Underwriting and financial mutations must FAIL CLOSED to prevent approving real loans on unverified data
    if (isSensitiveUnderwriting && !IS_DISCONNECTED_TEST_MODE) {
      throw new Error(`Live backend connection failed: ${err.message || "Underwriting and disbursement operations must fail closed."}`);
    }

    if (IS_DISCONNECTED_TEST_MODE) {
      return getMockFallback(endpoint, options.method);
    }
    throw err;
  }
}

