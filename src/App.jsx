import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import NatureCare from './components/NatureCare'
import Complex from './components/Complex'
import './App.css'

function App() {

  return (
   <div>
      <Hero />
      <Philosophy />
      <NatureCare />
      <Complex />
   </div>
  )
}

export default App
