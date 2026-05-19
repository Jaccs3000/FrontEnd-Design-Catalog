import { AppLayout } from "@/components/layout/app-layout"
import { ShowcaseGrid } from "@/components/showcase/showcase-grid"
import { ShowcaseCard } from "@/components/showcase/showcase-card"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Frontend Design Catalog
        </h1>

        <p className="text-muted-foreground mt-2">
          Modern UI components and patterns.
        </p>
      </div>

      <ShowcaseGrid>
        <ShowcaseCard
          title="Buttons"
          description="Interactive button variants."
        >
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>
          </div>
        </ShowcaseCard>
      </ShowcaseGrid>
    </AppLayout>
  )
}