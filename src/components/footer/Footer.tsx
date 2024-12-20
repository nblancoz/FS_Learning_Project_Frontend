import SocialMedia from './social-media/SocialMedia'
import paymentOptions from '../../assets/payment-options/payment-options.png'
import logo from '../../assets/logo/fotifit_logo.jpg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black text-white p-4'>
      <div className='flex justify-between items-center'>
        <div className='hidden sm:flex items-center'>
          <img src={logo} alt='Logo' className='h-16' />
        </div>
        <div className='flex flex-col items-center text-center flex-grow'>
          <SocialMedia />
          <p className='mt-4'>
            © {currentYear}, Todos los derechos reservados.
          </p>
        </div>
        <div className='hidden sm:flex items-center'>
          <img src={paymentOptions} alt='Payment Options' className='h-8' />
        </div>
      </div>
    </footer>
  )
}
