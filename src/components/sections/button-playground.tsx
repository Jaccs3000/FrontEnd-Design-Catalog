"use client"

import { useState } from "react"

import {
  Loader2,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { ShowcaseCard } from "@/components/showcase/showcase-card"
import { ComponentMeta } from "@/components/showcase/component-meta"

type Variant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"

type Size =
  | "sm"
  | "default"
  | "lg"

export function ButtonPlayground() {
  const [variant, setVariant] =
    useState<Variant>("default")

  const [size, setSize] =
    useState<Size>("default")

  const [loading, setLoading] =
    useState(false)

  const [disabled, setDisabled] =
    useState(false)

  const [icon, setIcon] =
    useState(false)

  return (
    <ShowcaseCard
      title="Button Playground"
      description="Interactively customize button properties and preview changes in real time."
    >
      <ComponentMeta
        library="React + shadcn/ui"
        category="Playground"
      />

      <div className="space-y-10">
        <div className="flex flex-col items-center justify-center rounded-3xl border bg-muted/20 p-10">
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
          >
            {loading && (
              <Loader2 className="animate-spin" />
            )}

            {icon && !loading && <Plus />}

            Interactive Button
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-sm font-medium">
              Variant
            </label>

            <select
              value={variant}
              onChange={(e) =>
                setVariant(
                  e.target.value as Variant
                )
              }
              className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none"
            >
              <option value="default">
                Default
              </option>

              <option value="secondary">
                Secondary
              </option>

              <option value="outline">
                Outline
              </option>

              <option value="ghost">
                Ghost
              </option>

              <option value="destructive">
                Destructive
              </option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">
              Size
            </label>

            <select
              value={size}
              onChange={(e) =>
                setSize(
                  e.target.value as Size
                )
              }
              className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none"
            >
              <option value="sm">
                Small
              </option>

              <option value="default">
                Default
              </option>

              <option value="lg">
                Large
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={loading}
              onChange={(e) =>
                setLoading(
                  e.target.checked
                )
              }
            />

            Loading
          </label>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) =>
                setDisabled(
                  e.target.checked
                )
              }
            />

            Disabled
          </label>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={icon}
              onChange={(e) =>
                setIcon(
                  e.target.checked
                )
              }
            />

            Icon
          </label>
        </div>
      </div>
    </ShowcaseCard>
  )
}