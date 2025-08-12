import { Link } from "react-router-dom"
function Header() {
  

  return (
    <>
     <header>
    <div className=' p-5 bg-gray-900' >
      <ul className='flex flex-row flex-wrap justify-center space-x-8 text-white'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
      </ul>
    </div>
    </header>
    </>
     )
}

export default Header