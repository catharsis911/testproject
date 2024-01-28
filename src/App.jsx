import {Route, Routes} from 'react-router-dom'

import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Search from './Components/Search'
import Test from './Components/TakeTest'
import { useState } from 'react'
import Home from './Pages/Home'
import Types from './Pages/Types'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Blog from './Pages/Blog'

// import Home from './Components/Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
            
          <Route path="/types" element={ <Types/> }/>
          
          <Route path="/about" element={ <About/> }/>
          
          <Route path="/contact" element={ <Contact/> }/>
        
          <Route path="/blog" element={ <Blog/> }/>
          
          <Route path="/login" element={ <Login/> }/>

          <Route path="/register" element={ <Register/> }/>

        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
