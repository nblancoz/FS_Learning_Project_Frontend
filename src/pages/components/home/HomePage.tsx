import FeaturedProducts from './body/featured-products/FeaturedProducts'
import MainBody from './body/main-body/MainBody'
import MostPopularProducts from './body/most-popular-products/MostPopularProducts'
import PurchaseBenefits from './body/purchase-benefits/PurchaseBenefits'

export default function HomePage() {
  return (
    <>
      <MainBody />
      <FeaturedProducts />
      <MostPopularProducts />
      <PurchaseBenefits />
    </>
  )
}
