export default interface Product {
  id: number
  title: string
  originalPrice: string
  discountedPrice?: string
  description: string
  image: string
  category: string
  stars: number
  reviews: number
}
