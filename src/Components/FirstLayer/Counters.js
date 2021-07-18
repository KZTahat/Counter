import React from "react";
import Counter from "../SecoundLayer/Counter";

class Counters extends React.Component {
  render() {
    const { onDecrement, onIncrement, onDelete, items } = this.props;    
    return (
      <div style={{}}>
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
      </div>
    );
  }
}

export default Counters;
