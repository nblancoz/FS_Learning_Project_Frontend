import proteinImage from '../../../../assets/featured-products/protein/protein.jpg'
import creatineImage from '../../../../assets/featured-products/creatine/creatine.jpg'
import preWorkout from '../../../../assets/featured-products/pre-workout/preWorkout.jpg'

export default function useFeaturedProductsLogic() {
  const products = [
    {
      id: 1,
      title: 'Proteínas',
      description:
        'Encuentra el suplemento proteíco que se adapte a tu objetivo.',
      image: proteinImage,
      buttonLabel: 'Ver Proteínas',
    },
    {
      id: 2,
      title: 'Creatinas',
      description:
        'Descubre la variedad de creatinas, buscando mejoras en tu rendimiento.',
      image: creatineImage,
      buttonLabel: 'Ver Creatinas',
    },
    {
      id: 3,
      title: 'Pre Entreno',
      description: 'Un buen pre entreno, ayudara tus ganancias musculares.',
      image: preWorkout,
      buttonLabel: 'Ver Pre Entrenos',
    },
  ]

  return {
    products,
  }
}
