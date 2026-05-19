"use client"

import { motion } from "framer-motion"

import {
  ArrowUpRight,
  CreditCard,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function CardsShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShowcaseCard
        title="Cards"
        description="Cards group related content and actions into flexible visual containers."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Data Display"
        />

        <div className="space-y-6">
          <div className="rounded-2xl border bg-background p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Revenue
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  $48,320
                </h3>
              </div>

              <div className="rounded-xl border p-3">
                <CreditCard className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-green-500">
                +12.5%
              </span>

              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border p-4">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Team Collaboration
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Manage projects and collaborate
                  with your team.
                </p>
              </div>
            </div>

            <Button className="mt-6 w-full">
              Open Workspace

              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}