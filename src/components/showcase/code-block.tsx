"use client"

import { useState } from "react"

import {
  Check,
  Copy,
  Code2,
} from "lucide-react"

type CodeBlockProps = {
  code: string
}

export function CodeBlock({
  code,
}: CodeBlockProps) {
  const [copied, setCopied] =
    useState(false)

  const [open, setOpen] =
    useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(
      code
    )

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="rounded-2xl border overflow-hidden">
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
        <button
          onClick={() =>
            setOpen(!open)
          }
          className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
        >
          <Code2 className="h-4 w-4" />

          {open
            ? "Hide Code"
            : "Show Code"}
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs hover:bg-muted transition"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />

              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />

              Copy
            </>
          )}
        </button>
      </div>

      {open && (
        <pre className="overflow-x-auto bg-black p-5 text-sm text-white">
          <code>
            {code}
          </code>
        </pre>
      )}
    </div>
  )
}