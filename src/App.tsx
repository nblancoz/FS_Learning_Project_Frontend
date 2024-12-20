import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './components/home/HomePage'
import { useMediaQuery } from 'react-responsive'
import MobileHomePage from './components/home/mobile/MobileHomePage'
import Footer from './components/footer/Footer'

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={isMobile ? <MobileHomePage /> : <HomePage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
