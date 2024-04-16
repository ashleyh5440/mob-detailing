import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import "../NavBar/styles.css";

function NavBar() {
    return (
      <div className="nav-container">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <NavLink to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/services">Services</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact">Contact</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    )
};

export default NavBar;