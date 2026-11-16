import { z } from 'zod'

export const categoriesSchema = z.array(z.string())

export type Categories = z.infer<typeof categoriesSchema>
