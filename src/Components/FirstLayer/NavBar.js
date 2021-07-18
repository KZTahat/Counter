import React from "react";
import './firstLayer.css';
import { Navbar, Nav, Container, Badge } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/Home">Shopping Cart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Products">Products</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href='/Cart' id='cartTag'>
                Cart (<Badge bg="secondary">{this.props.numberOfItems}</Badge>)
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
