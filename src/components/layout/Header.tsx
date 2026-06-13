"use client";

import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:ring-0 sm:text-sm focus:outline-none"
            placeholder="Search users, loans, applications..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-muted-foreground hover:text-foreground">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
          </button>
          <ThemeToggle />

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" aria-hidden="true" />

          <div className="flex items-center gap-x-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="text-sm font-medium text-primary">SA</span>
            </div>
            <span className="hidden lg:flex lg:items-center">
              <span className="text-sm font-semibold leading-6 text-foreground" aria-hidden="true">
                Super Admin
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
