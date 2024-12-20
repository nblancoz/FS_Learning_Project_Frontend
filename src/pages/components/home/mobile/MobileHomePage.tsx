import FeaturedProducts from '../body/featured-products/FeaturedProducts'
import MostPopularProducts from '../body/most-popular-products/MostPopularProducts'
import PurchaseBenefits from '../body/purchase-benefits/PurchaseBenefits'
import MobileMainBody from './body/main-body/MobileMainBody'

export default function MobileHomePage() {
  return (
    <>
      <MobileMainBody />
      <FeaturedProducts />
      <MostPopularProducts />
      <PurchaseBenefits />
    </>
  )
}
