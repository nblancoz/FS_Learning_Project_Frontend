import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {
  return (
    <div className='flex justify-center space-x-4 mt-4'>
      <a
        href='https://www.instagram.com/fortifit_'
        target='_blank'
        className='text-gray-600 hover:text-pink-500'
      >
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </a>
      <a
        href='https://www.tiktok.com/@fortifit_'
        target='_blank'
        className='text-gray-600 hover:text-white'
      >
        <FontAwesomeIcon icon={faTiktok} size='2x' />
      </a>
      <a
        href='https://wa.me/+573207986599'
        target='_blank'
        className='text-gray-600 hover:text-green-500'
      >
        <FontAwesomeIcon icon={faWhatsapp} size='2x' />
      </a>
    </div>
  )
}
