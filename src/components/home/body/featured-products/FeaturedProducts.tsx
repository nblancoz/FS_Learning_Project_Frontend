import useFeaturedProductsLogic from './useFeaturedProductsLogic'

export default function FeaturedProducts() {
  const { products } = useFeaturedProductsLogic()

  return (
    <div className='flex flex-col items-center justify-center h-full mt-8  px-4 md:px-8 lg:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white shadow-md rounded-lg overflow-hidden'
          >
            <img src={product.image} alt={product.title} />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
              <p className='text-gray-700 mb-4'>{product.description}</p>
              <button className='bg-orange-500 text-white px-4 py-2 rounded'>
                {product.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
