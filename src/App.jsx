import { useState } from 'react'
import Header from './resources/Header1'
import Footer from './resources/Footer1'
import Home from './resources/Home'
import { Routes, Route } from 'react-router-dom';
import About from './resources/About';
import Services from './resources/Services';
import Contact from './resources/Contact1';
import {FloatingWhatsApp} from "react-floating-whatsapp";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<FloatingWhatsApp
phoneNumber='6371903644'
avatar='./Founder.jpg'
accountName='Shree Balaji Granites'
statusMessage='Typically replies within 30 minutes'
placeholder='Type your message here.....'
messageDelay={3}
allowClickAway={true}
allowEsc={true}
chatboxHeight={400}
notification={true}
notificationDelay={10}
notificationSound={true}
notificationLoop={3}
style={{
  backgroundColor:"#25D366",
  color:"black",
}}
chatboxStyle={{
  backgroundColor:"#F0F0F0",
}}

/>






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
