import { Transition } from '@headlessui/react'

interface MobileNavigationOptions {
  isMenuOpen: boolean
  navigation: {
    name: string
    link: string
  }[]
}

export default function MobileNavigationOptions({
  isMenuOpen,
  navigation,
}: MobileNavigationOptions) {
  return (
    <>
      <Transition
        show={isMenuOpen}
        enter='transition ease-out duration-300'
        enterFrom='opacity-0 transform -translate-y-4'
        enterTo='opacity-100 transform translate-y-0'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100 transform translate-y-0'
        leaveTo='opacity-0 transform -translate-y-4'
      >
        <div className='lg:hidden'>
          <div className='space-y-1 px-2 pt-2 pb-3'>
            {navigation.map((page) => (
              <a
                key={page.name}
                href={page.link}
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50'
              >
                {page.name}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </>
  )
}
