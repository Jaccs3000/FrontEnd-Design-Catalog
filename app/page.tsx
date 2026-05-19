"use client"

import { AppLayout } from "@/components/layout/app-layout"

import { ShowcaseGrid } from "@/components/showcase/showcase-grid"

import { CategoryNav } from "@/components/navigation/category-nav"

import { ButtonsShowcase } from "@/components/sections/buttons-showcase"
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
  const { activeCategory } =
    useCatalogStore()

  return (
    <AppLayout>
      <div className="mb-10">
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
          activeCategory === "Buttons") && (
          <ButtonsShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Cards") && (
          <CardsShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Inputs") && (
          <InputsShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Dialogs") && (
          <DialogsShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Navigation") && (
          <TabsShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Data Display") && (
          <AccordionShowcase />
        )}

        {(activeCategory === "All" ||
          activeCategory === "Feedback") && (
          <>
            <TooltipShowcase />

            <BadgesShowcase />

            <EmptyShowcase />
          </>
        )}

        {(activeCategory === "All" ||
          activeCategory === "Loading") && (
          <SkeletonShowcase />
        )}
      </ShowcaseGrid>
    </AppLayout>
  )
}