import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 w-[300px]">
          <Search className="h-4 w-4 text-muted-foreground" />

          <input
            placeholder="Search components..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>
    </header>
  )
}