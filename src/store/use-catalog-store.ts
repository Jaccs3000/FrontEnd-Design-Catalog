import { create } from "zustand"

type CatalogStore = {
  activeCategory: string

  search: string

  setSearch: (
    value: string
  ) => void

  setActiveCategory: (
    category: string
  ) => void
}

export const useCatalogStore =
  create<CatalogStore>((set) => ({
    activeCategory: "All",

    search: "",

    setSearch: (value) =>
      set({
        search: value,
      }),

    setActiveCategory: (category) =>
      set({
        activeCategory: category,
      }),
  }))