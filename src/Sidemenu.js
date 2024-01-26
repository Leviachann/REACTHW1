import './Sidemenu.css';
import React from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

const SideMenu = () => {
  return (
    <Container className="side-menu">
      <Nav vertical>
        <NavItem>
          <NavLink className='linkitem' href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='linkitem' href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='linkitem' href="#">Pages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='linkitem' href="#">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='linkitem' href="#">FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='linkitem' href="#">Contact</NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default SideMenu;
