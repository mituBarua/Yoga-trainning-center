import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo-normal.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ModalPopup from "../Login/Login/ModalPopup";
const Header = () => {
  // const { signInUsingGoogle } = useAuth();
  const [modalShow, setModalShow] = React.useState(false);
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar bg="light" sticky="top" variant="light" 
        collapseOnSelect
        expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto custom-nav">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={HashLink} to="/blog">
              Blog
            </Nav.Link>
            {/* <Nav.Link as={HashLink} to="/login">Login</Nav.Link> */}

            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link
                onClick={() => setModalShow(true)}
                as={Link}
                to="/home"
              >
                Login
              </Nav.Link>
            )}
            <ModalPopup show={modalShow} onHide={() => setModalShow(false)} />
            <Navbar.Text className="user-name">
        
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
