import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/components/header/Header'
import HomePage from './pages/components/home/HomePage'
import MobileHomePage from './pages/components/home/mobile/MobileHomePage'
import Footer from './pages/components/footer/Footer'
import useAppLogic from './useAppLogic'
import Store from './pages/components/store/Store'

function App() {
  const { isMobile } = useAppLogic()

  return (
    <>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route
            path='/'
            element={isMobile ? <MobileHomePage /> : <HomePage />}
          />
          <Route path='/products' element={<Store />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
