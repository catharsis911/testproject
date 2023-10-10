import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {FiDelete} from 'react-icons/fi'
import {BsHouseDoor} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const Search = () => {
    return (
        <div className='search grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
          <form action="">
            
            <div className='firstDiv flex bg-white items-center justify-between rounded-[10px] gap-[10px] p-5 shadow-xl shadow-grayIsh'>
              
              <div className='flex gap-2 items-center'>
                <BiSearchAlt className='text-[25px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search Type Here"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <div className='flex gap-2 items-center'>
                <BsHouseDoor className='text-[25px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search By Company"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <div className='flex gap-2 items-center'>
                <HiOutlineLocationMarker className='text-[25px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search By location"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <button className="bg-greenColor h-full p-5 rounded-[10px] px-10 text-white cursor-pointer hover:bg-green-300">Search</button>
            </div>
          </form> 

          <div className="secDiv flex items-center gap-10 justify-center">
            <div className="singlSearch flex items-center gap-2">
              <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
            
                <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                   <option vlaue="">Relevance</option>
                   <option vlaue="">Inclusive</option>
                   <option vlaue="">Starts with</option>
                   <option vlaue="">Contains</option>
                </select>

            </div>

            <div className="singlSearch flex items-center gap-2">
              <label htmlFor="type" className="text-[#808080] font-semibold">Type:</label>
            
                <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
                   <option vlaue="">Full-time</option>
                   <option vlaue="">Remote</option>
                   <option vlaue="">Contracts</option>
                   <option vlaue="">Part-time</option>
                </select>

            </div>

            <div className="singlSearch flex items-center gap-2">
              <label htmlFor="level" className="text-[#808080] font-semibold">Level:</label>
            
                <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
                   <option vlaue="">Senior</option>
                   <option vlaue="">Beginner</option>
                   <option vlaue="">Intermediate</option>
                   <option vlaue="">Advocate</option>
                </select>

            </div>

          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
            
          </div>
        </div>
    )
}

export default Search