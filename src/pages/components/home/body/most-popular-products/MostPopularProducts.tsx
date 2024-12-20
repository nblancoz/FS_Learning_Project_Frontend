import useMostPopularProductsLogic from './useMostPopularProductsLogic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProductsCard from '../../../../../shared/products-card/ProductsCard'

export default function MostPopularProducts() {
  const { products } = useMostPopularProductsLogic()

  return (
    <div className='flex flex-col items-center justify-center h-full mt-16 mb-8 px-4 md:px-8 lg:px-16'>
      <h1 className='text-4xl font-semibold mb-8 text-gray-800'>
        LOS MÁS POPULARES
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <ProductsCard products={products} />
      </div>
      <a
        href='/products'
        className='mt-8 inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600'
      >
        Explorar Todos Los Productos
        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
      </a>
    </div>
  )
}
