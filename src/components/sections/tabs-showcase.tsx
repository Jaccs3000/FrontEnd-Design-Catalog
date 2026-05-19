"use client"

import { motion } from "framer-motion"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

export function TabsShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ShowcaseCard
        title="Tabs"
        description="Tabs organize content into multiple sections within the same interface."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Navigation"
        />

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">
              Overview
            </TabsTrigger>

            <TabsTrigger value="analytics">
              Analytics
            </TabsTrigger>

            <TabsTrigger value="settings">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="mt-6 rounded-2xl border p-5"
          >
            <h3 className="font-semibold">
              Overview
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              General dashboard information and
              project summary.
            </p>
          </TabsContent>

          <TabsContent
            value="analytics"
            className="mt-6 rounded-2xl border p-5"
          >
            <h3 className="font-semibold">
              Analytics
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              Metrics, reports and performance
              tracking.
            </p>
          </TabsContent>

          <TabsContent
            value="settings"
            className="mt-6 rounded-2xl border p-5"
          >
            <h3 className="font-semibold">
              Settings
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              Manage preferences and application
              configuration.
            </p>
          </TabsContent>
        </Tabs>
      </ShowcaseCard>
    </motion.div>
  )
}