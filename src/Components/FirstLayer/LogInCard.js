import React from "react";
import { Card } from "react-bootstrap";
import LogInButton from "../SecoundLayer/LogInButton";

class LogInCard extends React.Component {
  render() {
    return (
      <>
        <Card id='loginCard'>
          <Card.Header>Log In</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <LogInButton />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LogInCard;
