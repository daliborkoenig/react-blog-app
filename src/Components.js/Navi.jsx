import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './logo.svg';


function Navi() {
  return (
    <div className="Navi">
      <img src={logo} alt="Blog-logo"/>
      <p>A TEST BLOG APP MADE IN REACT</p>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home"><img src={logo} alt="Blog-logo"/></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/view-posts"><Nav.Link>View all posts</Nav.Link></LinkContainer>
              <LinkContainer to="/create-post"><Nav.Link>Create a post</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navi
