import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Events from './Components/Events/Events'
import StatusButton from './Components/StatusButton/StatusButton'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <StatusButton />
      <About />
      <Events />
      
      <Footer />
    </div>
  )
}

export default App