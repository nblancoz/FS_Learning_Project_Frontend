import { ShoppingBagIcon } from '@heroicons/react/24/outline'

interface ShoppingBagProps {
  cartItemCount: number
}

export default function ShoppingBag({ cartItemCount }: ShoppingBagProps) {
  return (
    <>
      <div className='ml-4 flow-root lg:ml-6 relative'>
        <a href='/cart' className='group -m-2 flex items-center p-2 relative'>
          <ShoppingBagIcon
            aria-hidden='true'
            className='h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500'
          />
          {cartItemCount >= 1 && (
            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-gray-600 rounded-full transform translate-x-1/2 -translate-y-1/2'>
              {cartItemCount}
            </span>
          )}
        </a>
      </div>
    </>
  )
}
