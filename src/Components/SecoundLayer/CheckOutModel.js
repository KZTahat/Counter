import React from "react";
import { Modal, Button, Form } from "react-bootstrap/";

class CheckOutModel extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModel}>
        <Modal.Header>
          <Modal.Title>Ceck Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Credit Card" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModel} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CheckOutModel;
