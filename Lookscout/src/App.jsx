import './App.css'
import CallToAction from './components/CallToAction'
import ContactForm from './components/ContactForm'
import Content from './components/Content'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Team from './components/Team'
import WebTabel from './components/WebTabel'

function App() {
  return (
    <>
      <div className='conatiner-fluid' style={{ fontFamily: "var(--regular)", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "#EAEBF0", fontFamily: "var(--regular)" }}>
        <Navbar />
        <Hero />
        </div>
        <Features />
        <Content />
        <Team />
        <WebTabel/>
        <ContactForm/>
        <CallToAction/>
        <Footer/>
      </div>
    </>
  )
}

export default App
