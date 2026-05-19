"use client"

import { AppLayout } from "@/components/layout/app-layout"

import { ShowcaseGrid } from "@/components/showcase/showcase-grid"

import { CategoryNav } from "@/components/navigation/category-nav"

import { ButtonsShowcase } from "@/components/sections/buttons-showcase"
import { ButtonPlayground } from "@/components/sections/button-playground"

import { CardsShowcase } from "@/components/sections/cards-showcase"

import { InputsShowcase } from "@/components/sections/inputs-showcase"

import { DialogsShowcase } from "@/components/sections/dialogs-showcase"

import { TabsShowcase } from "@/components/sections/tabs-showcase"

import { AccordionShowcase } from "@/components/sections/accordion-showcase"

import { TooltipShowcase } from "@/components/sections/tooltip-showcase"

import { BadgesShowcase } from "@/components/sections/badges-showcase"

import { SkeletonShowcase } from "@/components/sections/skeleton-showcase"

import { EmptyShowcase } from "@/components/sections/empty-showcase"

import { useCatalogStore } from "@/store/use-catalog-store"

export default function Home() {
  const {
    activeCategory,
    search,
  } = useCatalogStore()

  const normalizedSearch =
    search.toLowerCase()

  return (
    <AppLayout>
      <div className="mb-16">
        <h1 className="text-5xl font-bold tracking-tight">
          Frontend Design Catalog
        </h1>

        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
          Explore modern UI components, patterns,
          animations and frontend systems used in
          modern web applications.
        </p>
      </div>

      <CategoryNav />

      <ShowcaseGrid>
        {(activeCategory === "All" ||
          activeCategory === "Buttons") &&
          "buttons".includes(
            normalizedSearch
          ) && (
            <>
              <ButtonsShowcase />

              <ButtonPlayground />
            </>
          )}

        {(activeCategory === "All" ||
          activeCategory === "Cards") &&
          "cards".includes(
            normalizedSearch
          ) && <CardsShowcase />}

        {(activeCategory === "All" ||
          activeCategory === "Inputs") &&
          "inputs".includes(
            normalizedSearch
          ) && <InputsShowcase />}

        {(activeCategory === "All" ||
          activeCategory === "Dialogs") &&
          "dialogs".includes(
            normalizedSearch
          ) && <DialogsShowcase />}

        {(activeCategory === "All" ||
          activeCategory === "Navigation") &&
          "tabs".includes(
            normalizedSearch
          ) && <TabsShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Data Display") &&
          "accordion".includes(
            normalizedSearch
          ) && <AccordionShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Feedback") &&
          "tooltip".includes(
            normalizedSearch
          ) && <TooltipShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Feedback") &&
          "badges".includes(
            normalizedSearch
          ) && <BadgesShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Feedback") &&
          "empty".includes(
            normalizedSearch
          ) && <EmptyShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Loading") &&
          "skeleton".includes(
            normalizedSearch
          ) && <SkeletonShowcase />}

        {(activeCategory === "All" ||
          activeCategory ===
            "Playground") &&
          "playground".includes(
            normalizedSearch
          ) && <ButtonPlayground />}
      </ShowcaseGrid>
    </AppLayout>
  )
}