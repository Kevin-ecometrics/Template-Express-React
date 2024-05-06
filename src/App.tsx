import "./assets/styles.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Logo from "./components/Logo"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logo />
      <About />
      <hr className="border border-gray-300 w-full mb-4" />
      <Contact />
      <Footer />
    </div>
  )
}
