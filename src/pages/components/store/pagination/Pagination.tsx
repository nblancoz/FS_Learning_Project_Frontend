interface PaginationProps {
  goToPreviousPage: (() => void) | undefined
  goToNextPage: (() => void) | undefined
  currentPage: number | undefined
  totalPages: number | undefined
}

export default function Pagination({
  goToPreviousPage,
  goToNextPage,
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className='flex justify-center items-center w-full mt-8'>
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className='px-4 py-2 bg-orange-500 text-white rounded-md disabled:opacity-50 mr-4'
      >
        Anterior
      </button>
      <p className='text-gray-700 mx-4'>
        Página {currentPage} de {totalPages}
      </p>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className='px-4 py-2 bg-orange-500 text-white rounded-md disabled:opacity-50 ml-4'
      >
        Siguiente
      </button>
    </div>
  )
}
