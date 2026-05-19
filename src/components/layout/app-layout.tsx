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

        <main className="flex-1">
          <Header />

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}