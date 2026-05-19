"use client"

import { motion } from "framer-motion"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function SkeletonShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <ShowcaseCard
        title="Skeleton Loaders"
        description="Skeleton loaders improve perceived performance while content loads."
      >
        <ComponentMeta
          library="Tailwind CSS"
          category="Loading"
        />

        <div className="space-y-4">
          <div className="animate-pulse space-y-3">
            <div className="h-5 w-1/3 rounded-lg bg-muted" />

            <div className="h-4 w-full rounded-lg bg-muted" />

            <div className="h-4 w-2/3 rounded-lg bg-muted" />
          </div>

          <div className="animate-pulse rounded-2xl border p-5">
            <div className="h-32 rounded-xl bg-muted" />
          </div>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}