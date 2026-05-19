import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ShowcaseCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card className="rounded-3xl border bg-background/60 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300 min-h-[320px]">
      <CardHeader className="space-y-4 pb-6">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-2xl tracking-tight">
            {title}
          </CardTitle>

          <span className="text-xs rounded-full border px-3 py-1 text-muted-foreground whitespace-nowrap">
            shadcn/ui
          </span>
        </div>

        <CardDescription className="text-sm leading-7 max-w-xl">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        {children}
      </CardContent>
    </Card>
  )
}