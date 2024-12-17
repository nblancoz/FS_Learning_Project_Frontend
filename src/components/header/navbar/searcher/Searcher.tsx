import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearcherProps {
  toggleSearch: () => void
  search: (query: string) => Promise<void>
}

export default function Searcher({ toggleSearch, search }: SearcherProps) {
  return (
    <>
      <div className='ml-4 flex items-center'>
        <button
          onClick={toggleSearch}
          className='p-2 text-gray-400 hover:text-gray-500 lg:hidden'
        >
          <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />
        </button>
        <div className='hidden lg:flex items-center border border-gray-300 rounded-md overflow-hidden'>
          <input
            type='text'
            placeholder='Buscar'
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
            className='p-2 text-gray-400 hover:text-gray-500'
          >
            <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      </div>
    </>
  )
}
