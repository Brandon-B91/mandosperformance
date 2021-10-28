import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="dark" dark expand="xs">
        <div className="container">
          <NavbarBrand href="/">M & O's Performance</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/ourWork">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services"></NavLink>
            </NavItem>
            <NavbarText >
              <a href="tel:5057303303">
                <i class="fas fa-phone-alt"></i>
              </a>
            </NavbarText>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
