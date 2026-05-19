"use client"

import { motion } from "framer-motion"

import {
  Mail,
  Search,
} from "lucide-react"

import { Input } from "@/components/ui/input"

import { ShowcaseCard } from "@/components/showcase/showcase-card"

import { ComponentMeta } from "@/components/showcase/component-meta"

import { CodeBlock } from "@/components/showcase/code-block"

const inputCode = `
<Input placeholder="Enter your email" />

<Input
  disabled
  placeholder="Disabled input"
/>
`

export function InputsShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ShowcaseCard
        title="Inputs"
        description="Inputs collect and validate user data across forms and interactions."
      >
        <ComponentMeta
          library="shadcn/ui"
          category="Forms"
        />

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

              <Input
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Search
            </label>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

              <Input
                placeholder="Search components..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Disabled
            </label>

            <Input
              disabled
              placeholder="Disabled input"
            />
          </div>

          <CodeBlock code={inputCode} />
        </div>
      </ShowcaseCard>
    </motion.div>
  )
}