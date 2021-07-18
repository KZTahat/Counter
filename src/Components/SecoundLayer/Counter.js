import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Counter extends React.Component {
  render() {
    const { onDecrement, onIncrement, onDelete, id, counts } = this.props;
    return (
      <div>
        <Button
          onClick={() => onDecrement(id)}
          variant="warning"
          style={{ margin: "15px" }}
        >
          -
        </Button>
        <span>{counts}</span>
        <Button
          onClick={() => onIncrement(id)}
          variant="success"
          style={{ margin: "15px" }}
        >
          +
        </Button>
        <Button
          onClick={() => onDelete(id)}
          variant="danger"
          style={{ margin: "15px" }}
        >
          <i className="fas fa-trash"></i>
        </Button>
      </div>
    );
  }
}

export default Counter;
