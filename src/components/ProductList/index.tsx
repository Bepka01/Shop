interface Item {
  id: string | number
  title: string
}

interface PropsType<T extends Item> {
  arr: T[]
}

export const ProductList = <T extends Item>({ arr }: PropsType<T>) => {
  return (
    <ul>
      {arr.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
