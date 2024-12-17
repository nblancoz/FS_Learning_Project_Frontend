import Logo from '../../assets/logo/Logo'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import useNavbarLogic from './useNavbarLogic'

export default function Navbar() {
  const { navigation, search } = useNavbarLogic()

  return (
    <>
      <header>
        <p className='flex h-10 items-center justify-center bg-orange-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>
          Envio gratis en compras mayores a $300.000
        </p>
        <nav
          aria-label='Top'
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        >
          <div className='border-b border-gray-300'>
            <div className='flex h-16 items-center'>
              <div className='ml-4 flex lg:ml-0'>
                <a href='#'>
                  <span className='sr-only'>FortiFit Store</span>
                  <Logo />
                </a>
              </div>

              <div className='flex h-full space-x-8'>
                {navigation.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    {page.name}
                  </a>
                ))}
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Iniciar Sesion
                  </a>
                  <span aria-hidden='true' className='h-6 w-px bg-gray-200' />
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Crear Cuenta
                  </a>
                </div>

                {/* WIP selector */}
                {/* <div className='hidden lg:ml-8 lg:flex'>
                  <select
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    defaultValue={currencies[0].name}
                  >
                    {currencies.map((currency) => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                  </select>
                </div> */}

                <div className='ml-4 flex items-center space-x-2'>
                  <input
                    type='text'
                    placeholder='Busca Aqui'
                    className='block min-w-0 grow py-1.5 pl-3 pr-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const query = (e.target as HTMLInputElement).value
                        search(query)
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const query = (
                        document.querySelector('input') as HTMLInputElement
                      ).value
                      search(query)
                    }}
                    className='p-1 text-gray-400 hover:text-gray-500'
                  >
                    <MagnifyingGlassIcon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                <div className='ml-4 flow-root lg:ml-6'>
                  <a href='#' className='group -m-2 flex items-center p-2'>
                    <ShoppingBagIcon
                      aria-hidden='true'
                      className='size-5 shrink-0 text-gray-400 group-hover:text-gray-500'
                    />
                    <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                      0
                    </span>
                    <span className='sr-only'>items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
