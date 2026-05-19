"use client";

import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ShowcaseCard } from "@/components/showcase/showcase-card";
import { ComponentMeta } from "@/components/showcase/component-meta";

export function DialogsShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ShowcaseCard
        title="Dialogs"
        description="Dialogs display focused content and actions above the main interface."
      >
        <ComponentMeta library="shadcn/ui" category="Overlay" />

        <div className="space-y-6">
          <Dialog>
            <DialogTrigger className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Open Dialog
            </DialogTrigger>

            <DialogContent className="rounded-3xl">
              <DialogHeader>
                <DialogTitle>Create Project</DialogTitle>

                <DialogDescription>
                  Create a new workspace for your team and projects.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <input
                  placeholder="Project Name"
                  className="w-full rounded-xl border bg-background px-4 py-3 outline-none"
                />

                <Button className="w-full">Continue</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </ShowcaseCard>
    </motion.div>
  );
}
