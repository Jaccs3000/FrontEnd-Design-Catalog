import { create } from "zustand"

type CatalogStore = {
  activeCategory: string

  setActiveCategory: (
    category: string
  ) => void
}

export const useCatalogStore =
  create<CatalogStore>((set) => ({
    activeCategory: "All",

    setActiveCategory: (category) =>
      set({
        activeCategory: category,
      }),
  }))