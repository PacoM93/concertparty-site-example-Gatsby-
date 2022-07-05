import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

import { Link } from "gatsby"

import "./mainNavbar.scss"

const MainNavbar = ({ auth }) => {
  const authLinkText = auth ? "Logout" : "Login"
  return (
    <Navbar bg="light" expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href="/">
          <span className="logo-concert">Concert</span>
          <span className="logo-party">Party</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/concerts" className="nav-link">
              Featured concerts
            </Link>
            <Link to="/login" className="nav-link">
              {authLinkText}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
