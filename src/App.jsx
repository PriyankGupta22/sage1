import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import NatureCare from './components/NatureCare'
import Complex from './components/Complex'
import './App.css'

const routeToSection = {
  '/about-us': 'about-us',
  '/catalog': 'catalog',
  '/services': 'services',
  '/hair-body': 'catalog',
  '/accessories': 'services',
  '/blog': 'services',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const targetId = routeToSection[location.pathname]

    if (!targetId) {
      return
    }

    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname])

  return (
   <div>
      <Hero />
      <div id="about-us">
        <Philosophy />
      </div>
      <div id="catalog">
        <NatureCare />
      </div>
      <div id="services">
        <Complex />
      </div>
   </div>
  )
}

export default App
