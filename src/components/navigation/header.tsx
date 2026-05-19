"use client"

import { Search } from "lucide-react"

import { ThemeToggle } from "./theme-toggle"
import { MobileSidebar } from "./mobile-sidebar"

import { useCatalogStore } from "@/store/use-catalog-store"

export function Header() {
  const { search, setSearch } =
    useCatalogStore()

  return (
    <header className="border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <MobileSidebar />

          <div className="flex items-center gap-2 rounded-xl border bg-background px-3 py-2 w-[220px] md:w-[320px] shadow-sm">
            <Search className="h-4 w-4 text-muted-foreground" />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search components..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}