export interface CartProduct {
  productId: number
  quantity: number
}

export interface CartType {
  id: number
  userId: number
  date: string
  products: CartProduct[]
}
