import { useState } from 'react'

export default function useNavbarLogic() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(1)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
    if (!isSearchVisible) {
      setIsMenuOpen(false)
    }
  }

  const navigation = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Tienda',
      link: '/store',
    },
    {
      name: 'Contacto',
      link: '/contact',
    },
  ]

  const mobileNavigation = [
    ...navigation,
    {
      name: 'Iniciar Sesión',
      link: '/login',
    },
    {
      name: 'Crear Cuenta',
      link: '/register',
    },
  ]

  const currencies = [
    {
      name: 'COP',
      symbol: '$',
      img: 'https://restcountries.com/data/col.svg',
    },
    {
      name: 'USD',
      symbol: 'US$',
      img: 'https://restcountries.com/data/usa.svg',
    },
  ]

  const search = async (query: string) => {
    if (!query.trim()) {
      return
    }
    console.log(query)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setIsSearchVisible(false)
    }
  }

  return {
    isSearchVisible,
    toggleSearch,
    navigation,
    mobileNavigation,
    currencies,
    search,
    toggleMenu,
    isMenuOpen,
    cartItemCount,
    setCartItemCount,
  }
}
