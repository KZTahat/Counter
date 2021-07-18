import React from "react";
import "./firstLayer.css";
import Counter from "../SecoundLayer/Counter";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckOutModel from "../SecoundLayer/CheckOutModel";

class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckOutModel: false,
    };
  }

  showCheckoutModel = () => {
    this.setState({
      showCheckOutModel: true,
    });
  };

  render() {
    
    const { onDecrement, onIncrement, onDelete, items } = this.props;
    return (
      <div id="cartDiv">
        {items.map((element) => {          
          return (
            <Counter
              key={element.id}
              id={element.id}
              counts={element.counts}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />
          );
        })}        
        {items.length > 0 && (
          <Button onClick={this.showCheckoutModel} variant="secondary">
            CeckOut
          </Button>
        )}
        <CheckOutModel />
      </div>
    );
  }
}

export default Counters;
