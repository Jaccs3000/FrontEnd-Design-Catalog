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
    <Card className="rounded-3xl border bg-background/60 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            {title}
          </CardTitle>

          <span className="text-xs rounded-full border px-2 py-1 text-muted-foreground">
            shadcn/ui
          </span>
        </div>

        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}