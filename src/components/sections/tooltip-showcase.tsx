"use client"

import { motion } from "framer-motion"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function TooltipShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ShowcaseCard
        title="Tooltip"
        description="Tooltips provide contextual information when users hover or focus elements."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Feedback"
        />

        <div className="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger className="rounded-xl border px-4 py-2 text-sm hover:bg-muted transition">
              Hover me
            </TooltipTrigger>

            <TooltipContent>
              Quick contextual information
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="rounded-xl border px-4 py-2 text-sm hover:bg-muted transition">
              Settings
            </TooltipTrigger>

            <TooltipContent>
              Open application settings
            </TooltipContent>
          </Tooltip>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}