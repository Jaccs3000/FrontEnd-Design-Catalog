export function ShowcaseGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-8 xl:grid-cols-2 2xl:grid-cols-3">
      {children}
    </div>
  )
}