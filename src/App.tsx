
import './App.css'
import Benefits from './components/benefits'
import Calculator from './components/calculate'
import Hero from './components/hero'
import HowItWorks from './components/howItwork'
import Navbar from './components/navBar'


function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits/>
      <Calculator/>
    </>
  )
}

export default App
