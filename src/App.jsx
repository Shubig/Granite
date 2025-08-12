import { useState } from 'react'
import Header from './resources/Header1'
import Footer from './resources/Footer1'
import Home from './resources/Home'
import { Routes, Route } from 'react-router-dom';
import About from './resources/About';
import Services from './resources/Services';
import Contact from './resources/Contact1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />           
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  <Footer/>
    </>
  )
}

export default App
