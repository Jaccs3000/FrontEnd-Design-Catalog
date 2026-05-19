"use client"

import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function AccordionShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <ShowcaseCard
        title="Accordion"
        description="Accordions collapse and expand content sections to improve organization and readability."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Data Display"
        />

        <div className="space-y-4">
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is a design system?
              </AccordionTrigger>

              <AccordionContent>
                A design system is a collection of
                reusable components, patterns and
                guidelines used to create
                consistent interfaces.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why use component libraries?
              </AccordionTrigger>

              <AccordionContent>
                Component libraries accelerate
                development and improve
                consistency across applications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is responsive design?
              </AccordionTrigger>

              <AccordionContent>
                Responsive design adapts layouts
                and interfaces to different screen
                sizes and devices.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}