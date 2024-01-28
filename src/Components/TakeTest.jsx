import React from 'react'

const Test = () => {
    return (
        <div className="testContainer bg-white shadow-xl shadow-grayIsh hover:shadow-2xl h-[400px] w-[70%] my-20 mx-auto p-10">
          <div className="h-[70px]">
          <h1 className="lg:text-[30px] text-[23px] text-center text-textColor font-semibold">MBTI (Myers-Briggs Type Indicator)</h1>
          </div>
            <p className="lg:text-[25px] text-[19px] text-[#a5a6a6] border-t-4 p-4">
          It is used by organizations to help individuals develop and build self-awareness and to help teams work better together.
            </p>
           
            <button className="bg-greenColor block m-auto lg:p-6 p-3 rounded-[10px] lg:w-[40%] w-[90%] text-[20px] text-white cursor-pointer hover:bg-green-300">Take the Test</button>
        </div>
    )
}

export default Test