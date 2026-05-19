"use client"

import { AppLayout } from "@/components/layout/app-layout"

import { ShowcaseGrid } from "@/components/showcase/showcase-grid"

import { ButtonsShowcase } from "@/components/sections/buttons-showcase"
import { CardsShowcase } from "@/components/sections/cards-showcase"
import { InputsShowcase } from "@/components/sections/inputs-showcase"
import { DialogsShowcase } from "@/components/sections/dialogs-showcase"

export default function Home() {
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

      <ShowcaseGrid>
        <ButtonsShowcase />

        <CardsShowcase />

        <InputsShowcase />

        <DialogsShowcase />
      </ShowcaseGrid>
    </AppLayout>
  )
}