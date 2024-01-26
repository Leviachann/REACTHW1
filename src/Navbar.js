import './Sidemenu.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavbarP(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand className='linkitem' href="/">reactstrap</NavbarBrand>
        <NavbarToggler className='linkitem' onClick={toggle} />
        <Collapse className='linkitem' isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='linkitem' href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='linkitem' href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className='linkitem'>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarP;