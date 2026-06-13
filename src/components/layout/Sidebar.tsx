"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/app/actions/auth";
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Applications", href: "/admin/applications", icon: FileText },
  { name: "Active Loans", href: "/admin/loans", icon: Briefcase },
  { name: "Repayments", href: "/admin/repayments", icon: Wallet },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border text-sidebar-foreground">
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-glow">
            <Wallet className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display text-sidebar-foreground">Apka Credit</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(`${item.href}/`) && item.href !== "/admin");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground",
                    "mr-3 h-5 w-5 shrink-0 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 space-y-1">
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Settings
          </h3>
          <Link
            href="/admin/settings"
            className={cn(
              pathname === "/admin/settings"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
            )}
          >
            <Settings className="mr-3 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-sidebar-foreground transition-colors" aria-hidden="true" />
            Settings
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full text-muted-foreground hover:bg-sidebar-accent/50 hover:text-destructive group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-destructive transition-colors" aria-hidden="true" />
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
