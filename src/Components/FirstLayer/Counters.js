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
      showModel: false,
    };
  }

  showCheckoutModel = () => {
    this.setState({
      showModel: true,
    });
  };
  hideModel = () => {
    this.setState({
      showModel: false,
    });
  };

  render() {
    const { onDecrement, onIncrement, onDelete, items } = this.props;
    let totalPrice = 0;
    return (
      <div id="cartDiv">
        {items.map((element) => {
          totalPrice = (totalPrice + (element.price * element.counts));
          return (
            <Counter
              key={element.id}
              element={element}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />
          );
        })}
        {items.length > 0 && (
          <>
            <hr />
            <p id="totalPriceSpan">Total Price : {totalPrice} $</p>
            <Button onClick={this.showCheckoutModel} variant="secondary">
              CeckOut
            </Button>
          </>
        )}
        <CheckOutModel
          showModel={this.state.showModel}
          hideModel={this.hideModel}
          totalPrice={totalPrice}
        />
      </div>
    );
  }
}

export default Counters;
