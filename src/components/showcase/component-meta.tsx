type ComponentMetaProps = {
  library: string
  category: string
}

export function ComponentMeta({
  library,
  category,
}: ComponentMetaProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
        {library}
      </span>

      <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
        {category}
      </span>
    </div>
  )
}