import { Search } from "lucide-react"

import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 rounded-xl border bg-background px-3 py-2 w-[320px] shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />

          <input
            placeholder="Search components..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}