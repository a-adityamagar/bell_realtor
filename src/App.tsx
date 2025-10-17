
import './App.css'
import Benefits from './components/benefits'
import Calculator from './components/calculate'
import Hero from './components/hero'
import HowItWorks from './components/howItwork'
import Navbar from './components/navBar'
import TwoFour from './components/twoFour'


function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TwoFour/>
      <Benefits/>
      <Calculator/>
    </>
  )
}

export default App
