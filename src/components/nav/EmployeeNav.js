import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const EmployeeNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">Potty Pal</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <h2 className='crate'>We Do Our Business, So You Can Do Yours.</h2>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link color="white" className="navbar__link" to="/favorite/locations">Favorite Locations</Link>
            </NavItem>
            <NavItem>
              <Link color="white" className="navbar__link" to="/user/list">User List</Link>
            </NavItem>
            <NavItem>
              <Link color="white" className="navbar__link" to="" onClick={() => {
                localStorage.removeItem("potty_user")
                Navigate("/", { replace: true })
              }}>Logout</Link>
            </NavItem>
            
            <NavItem>
              <NavLink href=""></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

