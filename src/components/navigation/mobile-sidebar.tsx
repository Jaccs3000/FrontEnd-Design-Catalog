"use client"

import {
  LayoutDashboard,
  MousePointerClick,
  PanelsTopLeft,
  Layers3,
  Menu,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

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

export function MobileSidebar() {
  const {
    activeCategory,
    setActiveCategory,
  } = useCatalogStore()

  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden items-center justify-center rounded-xl border h-10 w-10">
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72"
      >
        <div className="mt-8">
          <h1 className="text-2xl font-bold">
            Frontend Catalog
          </h1>

          <p className="text-sm text-muted-foreground mt-2">
            Modern UI System
          </p>
        </div>

        <nav className="mt-10 space-y-2">
          {items.map((item) => {
            const Icon = item.icon

            const active =
              activeCategory === item.title

            return (
              <button
                key={item.title}
                onClick={() =>
                  setActiveCategory(
                    item.title
                  )
                }
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
                  
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
      </SheetContent>
    </Sheet>
  )
}