import React from "react";
import {Button, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
  render() {
    const { onDecrement, onIncrement, onDelete, element } = this.props;
    return (
      <div>
        <Badge bg="primary">{element.original_title}</Badge>
        <Badge bg="info">{element.price} $</Badge>
        <Button
          onClick={() => onDecrement(element.id)}
          variant="warning"
          style={{ margin: "15px" }}
        >
          -
        </Button>
        <span style={{color: 'yellow'}}>{element.counts}</span>
        <Button
          onClick={() => onIncrement(element.id)}
          variant="success"
          style={{ margin: "15px" }}
        >
          +
        </Button>
        <Button
          onClick={() => onDelete(element.id)}
          variant="danger"
          style={{ margin: "15px" }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Counter;
