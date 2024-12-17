export default function AuthLinks() {
  return (
    <>
      <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
        <a
          href='/login'
          className='text-sm font-medium text-gray-700 hover:text-gray-800'
        >
          Iniciar Sesión
        </a>
        <span aria-hidden='true' className='h-6 w-px bg-gray-200' />
        <a
          href='/create-account'
          className='text-sm font-medium text-gray-700 hover:text-gray-800'
        >
          Crear Cuenta
        </a>
      </div>
    </>
  )
}
