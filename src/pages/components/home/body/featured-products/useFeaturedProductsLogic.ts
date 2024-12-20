import proteinImage from '../../../../../assets/featured-products/protein/protein.jpg'
import creatineImage from '../../../../../assets/featured-products/creatine/creatine.jpg'
import preWorkoutImage from '../../../../../assets/featured-products/pre-workout/preWorkout.jpg'
import FeaturedProduct from '../../../../../domain/featured-product/FeaturedProduct'

export default function useFeaturedProductsLogic() {
  const products: FeaturedProduct[] = [
    {
      id: 1,
      title: 'Proteínas',
      description:
        'Encuentra el suplemento proteíco que se adapte a tu objetivo.',
      image: proteinImage,
      category: 'Suplementos',
      buttonLabel: 'Ver Proteínas',
    },
    {
      id: 2,
      title: 'Creatinas',
      description:
        'Descubre la variedad de creatinas, buscando mejoras en tu rendimiento.',
      image: creatineImage,
      category: 'Suplementos',
      buttonLabel: 'Ver Creatinas',
    },
    {
      id: 3,
      title: 'Pre Entreno',
      description: 'Un buen pre entreno, ayudara tus ganancias musculares.',
      image: preWorkoutImage,
      category: 'Suplementos',
      buttonLabel: 'Ver Pre Entrenos',
    },
  ]

  return {
    products,
  }
}
