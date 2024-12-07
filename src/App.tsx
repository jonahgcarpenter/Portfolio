import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Footer from "./components/Footer"
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <Footer />
    </>
  )
}

export default App