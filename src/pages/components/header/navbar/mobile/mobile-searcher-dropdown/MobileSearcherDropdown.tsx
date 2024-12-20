import { Transition } from '@headlessui/react'

interface MobileSearcherDropdownProps {
  isSearchVisible: boolean
  search: (query: string) => Promise<void>
}

export default function MobileSearcherDropdown({
  isSearchVisible,
  search,
}: MobileSearcherDropdownProps) {
  return (
    <>
      <Transition
        show={isSearchVisible}
        enter='transition ease-out duration-300'
        enterFrom='opacity-0 transform -translate-y-4'
        enterTo='opacity-100 transform translate-y-0'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100 transform translate-y-0'
        leaveTo='opacity-0 transform -translate-y-4'
      >
        <div className='lg:hidden'>
          <div className='px-2 pt-2 pb-3'>
            <input
              type='text'
              placeholder='Buscar'
              className='block w-full py-2 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-md focus:outline-none sm:text-sm'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const query = (e.target as HTMLInputElement).value
                  search(query)
                }
              }}
            />
          </div>
        </div>
      </Transition>
    </>
  )
}
