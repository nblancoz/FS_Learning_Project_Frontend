import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface MobileNavigationDropdownProps {
  toggleMenu: () => void
  isMenuOpen: boolean
}

export default function MobileNavigationDropdown({
  toggleMenu,
  isMenuOpen,
}: MobileNavigationDropdownProps) {
  return (
    <>
      <div className='flex items-center lg:hidden'>
        <button
          type='button'
          className='p-2 text-gray-400 hover:text-gray-500'
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          ) : (
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          )}
        </button>
      </div>
    </>
  )
}
