type Prop = {
  name: string
  type: string
  description: string
}

type PropsTableProps = {
  props: Prop[]
}

export function PropsTable({
  props,
}: PropsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              Prop
            </th>

            <th className="px-4 py-3 text-left font-medium">
              Type
            </th>

            <th className="px-4 py-3 text-left font-medium">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-t"
            >
              <td className="px-4 py-3 font-mono text-xs">
                {prop.name}
              </td>

              <td className="px-4 py-3 text-xs text-muted-foreground">
                {prop.type}
              </td>

              <td className="px-4 py-3 text-xs text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}