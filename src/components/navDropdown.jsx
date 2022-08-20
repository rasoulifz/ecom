import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {  Link } from 'react-router-dom';
import './home.css'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faShop,
  faSignIn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../store/auth-context';

export default function NavBarDropdown() {
  const linkStyle = {
    margin:".5rem 1rem",
    textDecoration: "none",
    color: '#a6dcb6',
    fontWeight:'bold'
  };

 const authCtx = useContext(AuthContext);
 const isLoggedIn = authCtx.isLoggedIn
 const navigate = useNavigate();
 
 const logoutHandler=()=>{
   authCtx.logout();
   navigate('/Home', {replace: true});
 }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
        <Container>
          <Navbar.Brand className="nav-item-text" href="#home">
            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
            Shopify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to ='/Home'  className="nav-item-text" style={linkStyle} >
                Home
              </Link>
              <Link to ='/Blogs' className="nav-item-text" style={linkStyle} >
                Blogs
              </Link>
              
              <Link  to ='/Contact' className="nav-item-text" style={linkStyle}>
              Contact
              </Link>
              <NavDropdown
                className="nav-item-text"
                title="Category"
                id="collasible-nav-dropdown"
                
              >
                <NavDropdown.Item href="/Celectronics">
                Electronics & Computers
                </NavDropdown.Item>
                <NavDropdown.Item href="/Cclothes">
                Clothes & Shoes
                </NavDropdown.Item>
                <NavDropdown.Item href="/Chomedecoration">
                Home Decoration
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>
              {!isLoggedIn && (<Link  to ='/auth' toclassName="nav-item-text" style={linkStyle}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Login/signUp
              </Link>)
              }
              {isLoggedIn && (<Link className="nav-item-text" to="/profile" style={linkStyle}>
                {' '}
               Profile
              </Link>)}
              {isLoggedIn && (
              <button onClick={logoutHandler} style={{background: '#3ab15d' , color:'#a6dcb6' , border:'#a6dcb6' , fontWeight:'bold'}}>Logout</button>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
