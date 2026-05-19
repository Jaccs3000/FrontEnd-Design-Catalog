import { Sidebar } from "../navigation/sidebar"
import { Header } from "../navigation/header"

export function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <Header />

          <div className="px-6 py-8 md:px-8 md:py-10 xl:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}