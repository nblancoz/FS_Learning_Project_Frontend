import ProductsRepository from '../../domain/products/ProductsRepository'
import Product from '../../shared/interfaces/Products'
import { mockedProducts } from './mockData'

export default function ProductRepository(): ProductsRepository {
  async function getProducts(): Promise<Product[]> {
    const products: Product[] = mockedProducts
    return products
  }

  return {
    getProducts,
  }
}
