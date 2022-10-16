import { useState } from 'react';
import { 
  Navbar, 
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import education from '../app/assets/img/learning-svgrepo-com.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
         className="mb-2" color="secondary" dark sticky='top' expand='md'
     >
      <NavbarBrand className='ms-4' href="/">
          <img
          alt="logo"
          src={education}
          style={{
              height: 80,
              width: 80
          }}
          className='float-start'
          />
          <h1 className='mt-2 px-5'>Learning Management System</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className='ms-auto' navbar>
          <NavItem>
              <NavLink className='nav-link' to='/' end>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='courses'>
                Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='students'>
                Students
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='marketplace'>
                Marketplace
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  );
}

export default Header;