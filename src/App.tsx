import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/components/header/Header'
import HomePage from './pages/components/home/HomePage'
import MobileHomePage from './pages/components/home/mobile/MobileHomePage'
import Footer from './pages/components/footer/Footer'
import useAppLogic from './useAppLogic'

function App() {
  const { isMobile } = useAppLogic()

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={isMobile ? <MobileHomePage /> : <HomePage />}
        />
      </Routes>
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
