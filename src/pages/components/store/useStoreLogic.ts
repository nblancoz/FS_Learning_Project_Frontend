import { useEffect, useState } from 'react'
import Product from '../../../shared/interfaces/Products'
import ProductRepository from '../../../infrastructure/products/ProductRepository'

export default function useStoreLogic() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('')
  const productsPerPage = 8

  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const repository = ProductRepository()
      const fetchedProducts = await repository.getProducts()
      setProducts(fetchedProducts)
      setTotalProducts(fetchedProducts.length)
    }
    fetchProducts()
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'popularity':
        return b.stars - a.stars
      case 'price-asc':
        const priceA = parseFloat(a.discountedPrice || a.originalPrice)
        const priceB = parseFloat(b.discountedPrice || b.originalPrice)
        return priceA - priceB
      case 'price-desc':
        const priceC = parseFloat(a.discountedPrice || a.originalPrice)
        const priceD = parseFloat(b.discountedPrice || b.originalPrice)
        return priceD - priceC
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(totalProducts / productsPerPage)

  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(
    startIndex + currentProducts.length - 1,
    totalProducts
  )

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = Math.min(prevPage + 1, totalPages)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
      return nextPage
    })
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => {
      const previousPage = Math.max(prevPage - 1, 1)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
      return previousPage
    })
  }

  const sortOptions = [
    { value: '', label: 'Orden por defecto' },
    { value: 'popularity', label: 'Ordenar por popularidad' },
    { value: 'price-asc', label: 'Ordenar por precio: bajo a alto' },
    { value: 'price-desc', label: 'Ordenar por precio: alto a bajo' },
  ]

  const handleSortChange = (value: string) => {
    setSortOption(value)
    setCurrentPage(1)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  return {
    products: currentProducts,
    totalProducts,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    goToNextPage,
    goToPreviousPage,
    sortOptions,
    handleSortChange,
  }
}
