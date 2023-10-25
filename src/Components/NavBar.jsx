import { Link } from 'react-router-dom'
import React from 'react'

// import Home from './Components/Pages/Home'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-[3rem]'>
          <div className='logoDiv'>
            <h1 className='logo text-[25px] text-greenColor'><strong>Mind</strong>Match</h1>
          </div>

          <div className='menu flex gap-8'>
            <Link to="/"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Home</li></Link>
            <Link to="/types"><li className='menuList text-[#6f6f6f] hover:text-greenColor'>Types</li></Link>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>About</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Contact</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Blog</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Login</li>
            <li className='menuList text-[#6f6f6f] hover:text-greenColor'>Register</li>
            
          </div>{/*
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/types">
              <Types />
            </Route>
            <Route path="/:user">
              <User />
            </Route>
            <Route>
              <NoMatch />
            </Route> 
          </Routes>
           <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/" component={types}></Route>
              <Route exact path="/" component={Jobs}></Route>
              <Route exact path="/" component={Jobs}></Route>
              <Route exact path="/" component={Jobs}></Route>
              <Route exact path="/" component={Jobs}></Route>
              <Route exact path="/" component={Jobs}></Route>
            </Switch>
          </Router> */}
        </div>
    )
}

export default NavBar