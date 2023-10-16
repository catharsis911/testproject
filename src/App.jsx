import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/Search/Search'
import Test from './Components/Test/TakeTest'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
        <Search/>
        <Test/>
        <Footer/>
      </div>
    </>
  )
}

export default App
