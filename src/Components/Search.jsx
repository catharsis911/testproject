import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {FiDelete} from 'react-icons/fi'
import {BsHouseDoor} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const Search = () => {
    return (
        <div className='search block md:gap-10 gap-5 bg-greyIsh rounded-[10px] md:p-[3rem] p-[1.3rem]'>
          <form action="" className='mb-10'>
            
            <div className='firstDiv mx-auto flex flex-wrap lg:max-w-[1030px] max-w-[330px] bg-white items-center lg:justify-between justify-center lg:rounded-[100px] rounded-[30px] md:gap-[10px] gap-[7px] md:p-5 p-3 shadow-xl shadow-grayIsh'>
              
              <div className='flex md:gap-2 gap-1 items-center'>
                <BiSearchAlt className='xl:text-[25px] text-[20px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search Type Here"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <div className='flex gap-2 items-center'>
                <BsHouseDoor className='xl:text-[25px] text-[20px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search By Company"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <div className='flex gap-2 items-center'>
                <HiOutlineLocationMarker className='xl:text-[25px] text-[20px] icon'/>
                <input type='text' className="bg-transparent text-green-600 focus:outline-none w-[100%]" placeholder="Search By location"/>
                <FiDelete className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
              </div>

              <button className="bg-greenColor h-full xl:p-5 p-3 xl:rounded-[100px] rounded-[60px] text-white cursor-pointer hover:bg-green-300">Search</button>
            </div>
          </form> 

          <div className="secDiv flex flex-wrap items-center xl:gap-10 gap-3 justify-center">
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