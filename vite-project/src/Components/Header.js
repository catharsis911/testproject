import logo from 'logo.png'

function Header() {
    return (
      <Navbar>
        <container>
            <NavLink href="#">
              <img 
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="logo"
              />
            </NavLink>
        </container>
      </Navbar>
    )
}