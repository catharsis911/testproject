import {Route, Routes} from 'react-router-dom'

import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Test from './Components/TakeTest'
import { useState } from 'react'

// import Home from './Components/Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
        <Search/>
        <Routes>
          <Test/>
          <Route></Route>
          <Route
            path="/login"
            element={ <LoginForm/> }
          />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
