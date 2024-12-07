import { useState, useEffect, useRef } from 'react'
import HireMe from './HireMe'

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 })
  const hireButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'education', 'hire']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  const handleHireClick = () => {
    if (hireButtonRef.current) {
      const rect = hireButtonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right
      })
      setDropdownOpen(!dropdownOpen)
    }
  }

  return (
    <nav>
      <div>
        <h1>Jonah Carpenter - Portfolio</h1>
        <div>
          {['about', 'projects', 'experience', 'education', 'hire'].map((section) => (
            <button
              key={section}
              ref={section === 'hire' ? hireButtonRef : undefined}
              onClick={section === 'hire' ? handleHireClick : () => scrollToSection(section)}
              style={{ 
                textTransform: section === 'hire' ? 'none' : 'capitalize'
              }}
            >
              {section === 'hire' ? 'Hire Me' : section}
            </button>
          ))}
        </div>
      </div>
      <HireMe isOpen={dropdownOpen} position={dropdownPosition} />
    </nav>
  )
}

export default Navbar