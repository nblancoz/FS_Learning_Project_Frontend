import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Product from '../interfaces/Products'

interface ProductsCardProps {
  products: Product[]
}

export default function ProductsCard({ products }: ProductsCardProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
      {products.map((product) => {
        const fullStars = Math.floor(product.stars)
        const hasHalfStar = product.stars % 1 !== 0

        return (
          <a href={`/products/${product.id}`} key={product.id}>
            <div className='relative bg-white shadow-md rounded-lg overflow-hidden'>
              {product.discountedPrice && (
                <div className='absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded'>
                  Sale!
                </div>
              )}
              <img
                src={product.image}
                alt={product.title}
                className='object-cover w-full h-72'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  {[...Array(fullStars)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className='text-yellow-500'
                    />
                  ))}
                  {hasHalfStar && (
                    <FontAwesomeIcon
                      icon={faStarHalfAlt}
                      className='text-yellow-500'
                    />
                  )}
                  {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                    (_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className='text-gray-300'
                      />
                    )
                  )}
                </div>
                <h2 className='text-lg font-semibold mb-2'>{product.title}</h2>
                <p className='text-gray-700 mb-2'>{product.description}</p>
                <div className='flex items-center'>
                  {product.discountedPrice && (
                    <p className='text-gray-500 line-through mr-2'>
                      {product.originalPrice}
                    </p>
                  )}
                  <p className='text-gray-900 font-semibold'>
                    {product.discountedPrice || product.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
