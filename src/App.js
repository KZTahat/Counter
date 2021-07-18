import React from "react";
import Counters from "./Components/FirstLayer/Counters";
import NavBar from "./Components/FirstLayer/NavBar";
import Footer from "./Components/FirstLayer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, counts: 1, limit: 5 },
        { id: 1, counts: 1, limit: 10 },
        { id: 2, counts: 1, limit: 7 },
        { id: 3, counts: 1, limit: 22 },
        { id: 4, counts: 1, limit: 3 },
        { id: 5, counts: 1, limit: 16 },
      ],
    };
  }

  onDecrement = (id) => {
    let newItems = this.state.items.map((element) => {
      if (element.id === id && element.counts !== 1) {
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
      <Router>
        <NavBar numberOfItems={this.state.items.length} />
        <Switch>
          {/* Home Page */}
          <Route exact path="/Home">
            <h1>Tombs</h1>
          </Route>
          {/* Products Page */}
          <Route exact path="/Products"></Route>
          {/* Shopping Cart Page */}
          <Route exact path="/Cart">
            <Counters
              items={this.state.items}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
              onDelete={this.onDelete}
            />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
