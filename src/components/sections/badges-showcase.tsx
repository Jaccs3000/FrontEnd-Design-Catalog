"use client"

import { motion } from "framer-motion"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function BadgesShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
    >
      <ShowcaseCard
        title="Badges"
        description="Badges highlight status, categories and metadata inside interfaces."
      >
        <ComponentMeta
          library="Custom + Tailwind"
          category="Feedback"
        />

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
            Active
          </span>

          <span className="rounded-full border px-3 py-1 text-xs">
            Draft
          </span>

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
            Success
          </span>

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-500">
            Error
          </span>

          <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-500">
            Warning
          </span>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}