import Product from '../../shared/interfaces/Products'

export default interface ProductsRepository {
  getProducts(): Promise<Product[]>
}
