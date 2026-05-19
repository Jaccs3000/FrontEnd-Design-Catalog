"use client"

import {
  LayoutDashboard,
  MousePointerClick,
  PanelsTopLeft,
  Layers3,
} from "lucide-react"

import { useCatalogStore } from "@/store/use-catalog-store"

const items = [
  {
    title: "All",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Buttons",
    label: "Buttons",
    icon: MousePointerClick,
  },
  {
    title: "Cards",
    label: "Cards",
    icon: PanelsTopLeft,
  },
  {
    title: "Dialogs",
    label: "Modals",
    icon: Layers3,
  },
]

export function Sidebar() {
  const {
    activeCategory,
    setActiveCategory,
  } = useCatalogStore()

  return (
    <aside className="hidden md:flex h-screen w-64 border-r bg-background/95 backdrop-blur p-4 flex-col sticky top-0">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight">
          Frontend Catalog
        </h1>

        <p className="text-sm text-muted-foreground mt-2">
          Modern UI System
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon

          const active =
            activeCategory === item.title

          return (
            <button
              key={item.title}
              onClick={() =>
                setActiveCategory(item.title)
              }
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all
              
              ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }
              `}
            >
              <Icon className="h-4 w-4" />

              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}