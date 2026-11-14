import { z } from 'zod'

export const categoriesSchema = z.array(z.string())

export type Category = z.infer<typeof categoriesSchema>
