"use client"

import { motion } from "framer-motion"

import { Inbox } from "lucide-react"

import { Button } from "@/components/ui/button"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function EmptyShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
    >
      <ShowcaseCard
        title="Empty States"
        description="Empty states guide users when there is no content available."
      >
        <ComponentMeta
          library="Custom + shadcn/ui"
          category="Feedback"
        />

        <div className="flex flex-col items-center rounded-2xl border p-10 text-center">
          <div className="rounded-2xl border p-4 mb-4">
            <Inbox className="h-8 w-8 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold">
            No Projects Found
          </h3>

          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Create your first project to start
            managing your workspace.
          </p>

          <Button className="mt-6">
            Create Project
          </Button>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}