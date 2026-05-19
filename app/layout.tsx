import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import "./globals.css"

import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}