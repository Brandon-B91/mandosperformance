import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="dark" dark expand="xs">
          <div className="container">
        <NavbarBrand href="/">M & O's Performance</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/ourWork">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactUs">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
