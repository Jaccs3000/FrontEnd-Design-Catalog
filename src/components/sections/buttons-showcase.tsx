"use client"

import {
  Loader2,
  Plus,
} from "lucide-react"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

import { ShowcaseCard } from "@/components/showcase/showcase-card"

import { ComponentMeta } from "@/components/showcase/component-meta"

import { CodeBlock } from "@/components/showcase/code-block"

import { PropsTable } from "@/components/showcase/props-table"

const buttonCode = `
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

<Button variant="destructive">
  Destructive
</Button>
`

const buttonProps = [
  {
    name: "variant",
    type: `"default" | "secondary" | "outline" | "ghost" | "destructive"`,
    description:
      "Controls the visual appearance of the button.",
  },

  {
    name: "size",
    type: `"sm" | "default" | "lg"`,
    description:
      "Controls button dimensions and spacing.",
  },

  {
    name: "disabled",
    type: "boolean",
    description:
      "Disables user interaction.",
  },
]

export function ButtonsShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ShowcaseCard
        title="Buttons"
        description="Buttons trigger actions, navigation and user interactions across the interface."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Actions"
        />

        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Variants
            </h3>

            <div className="flex flex-wrap gap-4">
              <Button>
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>

              <Button variant="destructive">
                Destructive
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Sizes
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">
                Small
              </Button>

              <Button>
                Default
              </Button>

              <Button size="lg">
                Large
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              States
            </h3>

            <div className="flex flex-wrap gap-4">
              <Button disabled>
                Disabled
              </Button>

              <Button>
                <Loader2 className="animate-spin" />

                Loading
              </Button>

              <Button>
                <Plus />

                Add Item
              </Button>
            </div>
          </div>

          <CodeBlock code={buttonCode} />

          <PropsTable props={buttonProps} />
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}