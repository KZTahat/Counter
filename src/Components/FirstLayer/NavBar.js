import React from "react";
import "./firstLayer.css";
import { Navbar, Nav, Container, Badge } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../SecoundLayer/LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <>
        <Navbar bg="primary" variant="dark" id="navBar">
          <Container>
            <Navbar.Brand>
              <Link className="Links" to="/Home">
                MoviesDB
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="Links" to="/Products">
                Products
              </Link>
              <Link className="Links" to="/Cart" id="cartTag">
                Cart (<Badge bg="secondary">{this.props.numberOfItems}</Badge>)
              </Link>
            </Nav>
          </Container>
          {isAuthenticated && <LogoutButton />}
        </Navbar>
      </>
    );
  }
}

export default withAuth0(NavBar);
