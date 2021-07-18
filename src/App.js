import React from "react";
import Counters from "./Components/FirstLayer/Counters";
import NavBar from "./Components/FirstLayer/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, counts: 0, limit: 5 },
        { id: 1, counts: 0, limit: 10 },
        { id: 2, counts: 0, limit: 7 },
        { id: 3, counts: 0, limit: 22 },
        { id: 4, counts: 0, limit: 3  },
        { id: 5, counts: 0, limit: 16 },
      ],
    };
  }

  onDecrement = (id) => {
    let newItems = this.state.items.map((element) => {
      if (element.id === id && element.counts !== 0) {
        element.counts = element.counts - 1;
      }
      return element;
    });
    this.setState({ items: newItems });
  };

  onIncrement = (id) => {
    let newItems = this.state.items.map((element) => {
      if (element.id === id && element.counts < element.limit) {
        element.counts = element.counts + 1;
      }
      return element;
    });
    this.setState({ items: newItems });
  };

  onDelete = (id) => {
    let newItems = [];
    this.state.items.forEach((element) => {
      if (!(element.id === id)) {
        newItems.push(element);
      }
    });
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <>
        <NavBar numberOfItems={this.state.items.length} />
        <Counters
          items={this.state.items}
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

export default App;
