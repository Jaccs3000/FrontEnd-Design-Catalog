import {
  LayoutDashboard,
  MousePointerClick,
  PanelsTopLeft,
  Layers3,
} from "lucide-react"

const items = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Buttons",
    icon: MousePointerClick,
  },
  {
    title: "Cards",
    icon: PanelsTopLeft,
  },
  {
    title: "Modals",
    icon: Layers3,
  },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 border-r bg-background p-4 flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">
          Frontend Catalog
        </h1>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.title}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition"
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}