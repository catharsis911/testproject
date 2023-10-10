import React from 'react'

const Test = () => {
    return (
        <div className="testContainer bg-white shadow-xl shadow-grayIsh hover:shadow-2xl h-[400px] w-[70%] my-20 mx-auto p-10">
          <div className="h-[70px]">
          <h1 className="text-[30px] text-center text-textColor font-semibold">MBTI (Myers-Briggs Type Indicator)</h1>
          </div>
            <p className="text-[25px] text-[#a5a6a6] border-t-4 p-4">
          It is used by organizations to help individuals develop and build self-awareness and to help teams work better together.
            </p>
           
            <button className="bg-greenColor block m-auto p-6 rounded-[10px] w-[40%] text-[20px] text-white cursor-pointer hover:bg-green-300">Take the Test</button>
        </div>
    )
}

export default Test