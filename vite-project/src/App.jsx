import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-sky-600'>
        <img
        src="https://i.pinimg.com/originals/3a/f3/11/3af311dec9d503e97946cc02f890f15f.png"
        alt="16"
        className="h-100"
        />
        <h1 className="text-3xl text-blue-300">MindMatch</h1>
        <button className="my-10s border border-green-700 h-300">Take the Test</button>
      </div>
    </>
  )
}

export default App
