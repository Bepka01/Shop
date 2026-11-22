interface Item {
  id: string | number
  title: string
}

interface ProductListProps {
  items: Item[]
}

export const ProductList = ({ items }: ProductListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
