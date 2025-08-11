import { useState } from 'react'
import Header from './resources/Header1'
import Footer from './resources/Footer1'
import Home from './resources/Home'
import { Routes, Route } from 'react-router-dom';
import About from './resources/About';
import Services from './resources/Services';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />           
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services/>} />
  </Routes>
  <Footer/>
    </>
  )
}

export default App
