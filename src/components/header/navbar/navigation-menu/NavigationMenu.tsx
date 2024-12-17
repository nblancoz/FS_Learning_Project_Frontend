interface NavigationMenuProps {
  name: string
  link: string
}
export default function NavigationMenu({
  navigation,
}: {
  navigation: NavigationMenuProps[]
}) {
  return (
    <>
      <div className='hidden lg:flex lg:space-x-8 lg:ml-8'>
        {navigation.map((page) => (
          <a
            key={page.name}
            href={page.link}
            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
          >
            {page.name}
          </a>
        ))}
      </div>
    </>
  )
}
