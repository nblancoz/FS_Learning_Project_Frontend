import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

export default function useAppLogic() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/products':
        document.title = 'FortiFit | Tienda'
        break
      case '/contact':
        document.title = 'FortiFit | Contacto'
        break
      case '/login':
        document.title = 'FortiFit | Iniciar Sesión'
        break
      case '/register':
        document.title = 'FortiFit | Registrarse'
        break
      case '/cart':
        document.title = 'FortiFit | Carrito'
        break
      default:
        document.title = 'FortiFit Store'
    }
  }, [location.pathname])

  return {
    isMobile,
  }
}
