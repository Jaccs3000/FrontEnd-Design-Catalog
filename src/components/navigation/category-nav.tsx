"use client"

import { categories } from "@/data/categories"

import { useCatalogStore } from "@/store/use-catalog-store"

export function CategoryNav() {
  const {
    activeCategory,
    setActiveCategory,
  } = useCatalogStore()

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((category) => {
        const active =
          activeCategory === category

        return (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`rounded-full px-4 py-2 text-sm transition-all border
              
              ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }
            `}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}