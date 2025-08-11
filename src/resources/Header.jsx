import { Link } from "react-router-dom"
function Header() {
  

  return (
    <>
     <header>
    <div className='h-12 p-3.5 bg-gray-900' >
      <ul className='flex flex-row justify-center space-x-8 text-white'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/services'>Services</Link></li>
      </ul>
    </div>
    </header>
    </>
     )
}

export default Header