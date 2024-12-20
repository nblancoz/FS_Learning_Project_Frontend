import useNavbarLogic from './useNavbarLogic'
import logo from '../../../../assets/logo/fotifit_logo.jpg'
import MobileNavigationDropdown from './mobile/mobile-navigation/mobile-navigation-dropdown/MobileNavigationDropdown'
import NavigationMenu from './navigation-menu/NavigationMenu'
import AuthLinks from './auth-links/AuthLinks'
import Searcher from './searcher/Searcher'
import ShoppingBag from './shopping-bag/ShoppingBag'
import MobileNavigationOptions from './mobile/mobile-navigation/mobile-navigation-options/MobileNavigationOptions'
import MobileSearcherDropdown from './mobile/mobile-searcher-dropdown/MobileSearcherDropdown'
// import CurrencySelector from '../currency-selector/CurrencySelector'

export default function Navbar() {
  const {
    isSearchVisible,
    toggleSearch,
    navigation,
    mobileNavigation,
    // currencies,
    search,
    toggleMenu,
    isMenuOpen,
    cartItemCount,
  } = useNavbarLogic()

  return (
    <>
      <nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='border-b border-gray-300'>
          <div className='flex h-16 items-center justify-between'>
            <MobileNavigationDropdown
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
            />
            <div className='flex items-center justify-center flex-grow lg:flex-grow-0'>
              <a href='/' className='ml-4 lg:ml-0'>
                <img src={logo} alt='Logo' className='h-12 object-contain' />
              </a>
            </div>
            <NavigationMenu navigation={navigation} />
            <div className='ml-auto flex items-center'>
              <AuthLinks />
              {/* <CurrencySelector currencies={currencies} /> */}
              <Searcher toggleSearch={toggleSearch} search={search} />
              <ShoppingBag cartItemCount={cartItemCount} />
            </div>
          </div>
          <MobileNavigationOptions
            isMenuOpen={isMenuOpen}
            mobileNavigation={mobileNavigation}
          />
          <MobileSearcherDropdown
            isSearchVisible={isSearchVisible}
            search={search}
          />
        </div>
      </nav>
    </>
  )
}
