// import { useState } from 'react';
import Logo from '../../assets/logo/Logo';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import useNavbarLogic from './useNavbarLogic';

export default function Navbar() {
  const { navigation } = useNavbarLogic();
  //   const [open, setOpen] = useState(false);

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
              <button
                type='button'
                // onClick={() => setOpen(true)}
                className='relative rounded-md bg-white p-2 text-gray-400 lg:hidden'
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open menu</span>
                <Bars3Icon aria-hidden='true' className='size-6' />
              </button>

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

                {/* change currency */}
                {/* <div className='hidden lg:ml-8 lg:flex'>
                  <a
                    href='#'
                    className='flex items-center text-gray-700 hover:text-gray-800'
                  >
                    <img
                      alt=''
                      src='https://tailwindui.com/plus/img/flags/flag-canada.svg'
                      className='block h-auto w-5 shrink-0'
                    />
                    <span className='ml-3 block text-sm font-medium'>CAD</span>
                    <span className='sr-only'>, change currency</span>
                  </a>
                </div> */}

                <div className='flex lg:ml-6'>
                  <a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden='true'
                      className='size-6'
                    />
                  </a>
                </div>

                <div className='ml-4 flow-root lg:ml-6'>
                  <a href='#' className='group -m-2 flex items-center p-2'>
                    <ShoppingBagIcon
                      aria-hidden='true'
                      className='size-6 shrink-0 text-gray-400 group-hover:text-gray-500'
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
  );
}
