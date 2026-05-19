import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Frontend Design Catalog",
  description: "Modern frontend UI catalog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}