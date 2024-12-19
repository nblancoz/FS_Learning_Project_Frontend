import ironNutritionImage from '../../../../assets/most-popular-products/iron-nutrition-creatine.png'
import muscletechPlatinumImage from '../../../../assets/most-popular-products/muscletech-creatine.png'
import iso100Protein5lbImage from '../../../../assets/most-popular-products/iso100-protein-5lb.png'
import iso100Protein13lbImage from '../../../../assets/most-popular-products/iso100-protein-1.3lb.png'

export default function useMostPopularProductsLogic() {
  const products = [
    {
      id: 1,
      stars: 5,
      title: 'Creatina Iron Nutrition',
      description: '100 Servicios',
      image: ironNutritionImage,
      originalPrice: '130.000$',
      discountedPrice: '120.000$',
    },
    {
      id: 2,
      stars: 2,
      title: 'Creatina Platinum',
      description: '80 Servicios',
      image: muscletechPlatinumImage,
      originalPrice: '170.000$',
      discountedPrice: '155.000$',
    },
    {
      id: 3,
      stars: 2,
      title: 'Proteína Iso 100',
      description: '5LB',
      image: iso100Protein5lbImage,
      originalPrice: '450.000$',
      // discountedPrice: '387.000$',
    },
    {
      id: 4,
      stars: 2,
      title: 'Proteína Iso 100',
      description: '1.3LB',
      image: iso100Protein13lbImage,
      originalPrice: '210.000$',
      discountedPrice: '170.000$',
    },
  ]

  return {
    products,
  }
}
