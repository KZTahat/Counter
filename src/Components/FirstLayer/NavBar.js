import React from "react";
import "./firstLayer.css";
import { Navbar, Nav, Container, Badge } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark" id="navBar">
          <Container>
            <Navbar.Brand>Shopping Cart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Products">Products</Nav.Link>
              <Nav.Link href="/Cart" id="cartTag">
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
