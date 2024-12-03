export type CategoryType = {
  id: number
  name: string
  slug: string
  details: string
  subcategories?: {
    id: number
    name: string
    details: string
    slug: string
  }[]
}
