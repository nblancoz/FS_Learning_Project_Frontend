import FeaturedProducts from './body/featured-products/FeaturedProducts'
import MainBody from './body/main-body/MainBody'
import MostPopularProducts from './body/most-popular-products/MostPopularProducts'

export default function HomePage() {
  return (
    <>
      <MainBody />
      <FeaturedProducts />
      <MostPopularProducts />
    </>
  )
}
