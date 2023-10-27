import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-[3rem]'>
          <div className='logoDiv'>
            <h1 className='logo text-[25px] text-greenColor'><strong>Mind</strong>Match</h1>
          </div>

          <div className='menu flex gap-8'>
            <Link to="/"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Home</li></Link>
            <Link to="/types"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Types</li></Link>
            <Link to="/about"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>About</li></Link>
            <Link to="/contact"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Contact</li></Link>
            <Link to="/blog"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Blog</li></Link>
            <Link to="/login"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Login</li></Link>
            <Link to="/register"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Register</li></Link>
            
          </div>
        </div>
    )
}

export default NavBar