import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruck,
  faRecycle,
  faPercentage,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

export default function PurchaseBenefits() {
  const benefits = [
    { icon: faTruck, title: 'Pago Contraentrega' },
    { icon: faRecycle, title: 'Garantía del Producto' },
    { icon: faPercentage, title: 'Mejores Precios del Mercado' },
    { icon: faLock, title: 'Seguridad en tu Envío' },
  ]

  return (
    <div className='flex flex-wrap justify-center gap-8 mt-8 mb-4'>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-64'
        >
          <FontAwesomeIcon
            icon={benefit.icon}
            size='3x'
            className='text-orange-500 mb-4'
          />
          <h3 className='text-xl font-semibold'>{benefit.title}</h3>
        </div>
      ))}
    </div>
  )
}
