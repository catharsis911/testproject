import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-[3rem]'>
          <div className='logoDiv'>
            <h1 className='logo text-[25px] text-greenColor'><strong>Mind</strong>Match</h1>
          </div>

          <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Jobs</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Types</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>About</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Contact</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Blog</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Login</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Register</li>
            
          </div>
        </div>
    )
}

export default NavBar