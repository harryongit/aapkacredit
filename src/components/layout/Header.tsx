"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Bell, 
  Search, 
  ShieldCheck, 
  Sliders, 
  FileText, 
  LogOut, 
  AlertTriangle, 
  CheckCircle2, 
  IndianRupee, 
  HeadphonesIcon,
  ChevronDown
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { logoutAction } from "@/app/actions/auth";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    {
      id: "n-1",
      title: "Failed IMPS Payout Flagged",
      desc: "UTR payout failed for APP-1092. Retry required.",
      time: "10m ago",
      type: "alert",
      href: "/admin/disbursements",
    },
    {
      id: "n-2",
      title: "New High-Priority Ticket #TK-84920",
      desc: "Aarav Sharma reported bureau score discrepancy.",
      time: "24m ago",
      type: "support",
      href: "/admin/support",
    },
    {
      id: "n-3",
      title: "Bureau Fee Collected",
      desc: "₹199 paid by Rohan Mehta (CIBIL 740).",
      time: "1h ago",
      type: "success",
      href: "/admin/credit-checks",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/admin/applications?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form onSubmit={handleSearch} className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="search-field"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block h-full w-full border-0 py-0 pl-8 pr-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:ring-0 sm:text-sm focus:outline-none"
            placeholder="Search applications, users, disbursements (Press Enter)..."
            type="search"
            name="search"
          />
        </form>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                type="button" 
                className="relative -m-2.5 p-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-full focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-5 w-5" aria-hidden="true" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-background animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-2 bg-card border-border shadow-xl">
              <div className="flex items-center justify-between px-2 py-1.5">
                <DropdownMenuLabel className="p-0 font-semibold text-sm">System Alerts</DropdownMenuLabel>
                {unreadCount > 0 && (
                  <button 
                    onClick={() => setUnreadCount(0)} 
                    className="text-[11px] text-primary hover:underline font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <DropdownMenuSeparator />
              <div className="space-y-1">
                {notifications.map((item) => (
                  <DropdownMenuItem key={item.id} asChild className="cursor-pointer p-2 rounded-lg hover:bg-muted/60">
                    <Link href={item.href} className="flex items-start gap-2.5">
                      <div className="mt-0.5">
                        {item.type === "alert" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                        {item.type === "support" && <HeadphonesIcon className="h-4 w-4 text-sky-500" />}
                        {item.type === "success" && <IndianRupee className="h-4 w-4 text-emerald-500" />}
                      </div>
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground">{item.title}</p>
                          <span className="text-[10px] text-muted-foreground">{item.time}</span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 line-clamp-1">{item.desc}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer text-center justify-center text-xs font-medium text-primary">
                <Link href="/admin/audit-logs">View Full Audit Log</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" aria-hidden="true" />

          {/* User Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-x-2.5 focus:outline-none rounded-lg p-1 hover:bg-muted/40 transition-colors">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-sm font-semibold text-primary">SA</span>
                </div>
                <div className="hidden lg:flex lg:flex-col lg:items-start text-left">
                  <span className="text-sm font-semibold leading-tight text-foreground flex items-center gap-1.5">
                    Super Admin
                    <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-primary/30 text-primary">
                      Owner
                    </Badge>
                  </span>
                  <span className="text-[11px] text-muted-foreground">Operations Control</span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden lg:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border shadow-xl">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Super Administrator</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@aapkacredit.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/admin/settings" className="flex items-center">
                  <Sliders className="mr-2 h-4 w-4" />
                  <span>Platform Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/admin/audit-logs" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Audit Trail</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/admin/support" className="flex items-center">
                  <HeadphonesIcon className="mr-2 h-4 w-4" />
                  <span>Support Desk</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={async () => {
                  await logoutAction();
                }}
                className="cursor-pointer text-destructive focus:text-destructive flex items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
