import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

interface MostPopularProductsCardProps {
  products: {
    id: number
    stars: number
    title: string
    description: string
    image: string
    originalPrice: string
    discountedPrice?: string
  }[]
}

export default function MostPopularProductsCard({
  products,
}: MostPopularProductsCardProps) {
  return (
    <>
      {products.map((product) => {
        const fullStars = Math.floor(product.stars)
        const hasHalfStar = product.stars % 1 !== 0

        return (
          <a href={`/products/${product.id}`} key={product.id}>
            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
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
                <h2 className='text-lg font-bold mb-2'>{product.title}</h2>
                <p className='text-gray-700 mb-4'>{product.description}</p>
                <div className='flex gap-2 items-center'>
                  {product.discountedPrice ? (
                    <p className='text-gray-500 mb-4 line-through'>
                      {product.originalPrice}
                    </p>
                  ) : (
                    <p className='text-gray-700 mb-4'>
                      {product.originalPrice}
                    </p>
                  )}
                  {product.discountedPrice && (
                    <p className='text-gray-700 mb-4'>
                      {product.discountedPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </>
  )
}
