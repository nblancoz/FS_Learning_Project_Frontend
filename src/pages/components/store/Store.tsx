import ProductsCard from '../../../shared/products-card/ProductsCard'
import Pagination from './pagination/Pagination'
import Sort from './sort/Sort'
import useStoreLogic from './useStoreLogic'

export default function Store() {
  const {
    products,
    totalProducts,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    goToNextPage,
    goToPreviousPage,
    sortOptions,
    handleSortChange,
  } = useStoreLogic()

  return (
    <div className='flex flex-col items-center justify-center h-full mt-4 mb-8 px-4 md:px-8 lg:px-16'>
      <h1 className='text-4xl font-semibold mb-8 text-gray-800'>Productos</h1>
      <div className='flex justify-between w-full mb-8'>
        <p className='text-gray-700'>
          Mostrando {startIndex} - {endIndex} de {totalProducts} resultados
        </p>
        <Sort options={sortOptions} onSortChange={handleSortChange} />
      </div>
      <ProductsCard products={products} />
      <Pagination
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
