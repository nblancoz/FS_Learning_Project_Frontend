import Navbar from './navbar/Navbar'
import UpperNavbar from './upper-navbar/UpperNavbar'

export default function Header() {
  return (
    <>
      <header>
        <UpperNavbar />
        <Navbar />
      </header>
    </>
  )
}
