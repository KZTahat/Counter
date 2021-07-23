import React from "react";
import axios from "axios";
import Products from "./Components/FirstLayer/Products";
import Counters from "./Components/FirstLayer/Counters";
import NavBar from "./Components/FirstLayer/NavBar";
import Footer from "./Components/FirstLayer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // Getting Cart Items at refreash :)
  componentDidMount = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_SERVER}/getcartitems`
    );
    this.setState({
      items: response.data,
    });
  };

  // Decrementing counts in cart
  onDecrement = async (id) => {
    let response = await axios.put(
      `${process.env.REACT_APP_SERVER}/decreascount/${id}?`
    );
    let newItems = this.state.items.map((element) => {
      if (element.id === id) {
        element.counts = response.data.counts;
      }
      return element;
    });
    this.setState({ items: newItems });
  };

  // Incrementing counts in cart
  onIncrement = async (id) => {
    let response = await axios.put(
      `${process.env.REACT_APP_SERVER}/increascounts/${id}?`
    );
    let newItems = this.state.items.map((element) => {
      if (element.id === id) {
        element.counts = response.data.counts;
      }
      return element;
    });
    this.setState({ items: newItems });
  };

  // Deleting Items From Cart
  onDelete = async (id) => {
    let response = await axios.delete(
      `${process.env.REACT_APP_SERVER}/deleteitem/${id}?`
    );
    this.setState({
      items: response.data,
    });
  };

  // Adding Items To Cart
  addToCart = async (id, element) => {
    let flag = false;
    this.state.items.forEach((element) => {
      if (element.id === id) {
        flag = true;
      }
    });
    if (flag === false) {
      let response = await axios.put(
        `${process.env.REACT_APP_SERVER}/updatecart/${id}?original_title=${element.original_title}`
      );
      const addedObject = {
        id: id,
        counts: 1,
        limit: 10,
        original_title: response.data.original_title,
        price: response.data.price,
      };
      this.state.items.push(addedObject);
      this.setState({
        items: this.state.items,
      });
    }
  };

  // Rendering Components
  render() {
    return (
      <Router>
        <NavBar numberOfItems={this.state.items.length} />
        <Switch>
          {/* Home Page */}
          <Route exact path="/Home">
            <h1>Author: Khaled Tahat</h1>
          </Route>
          {/* Products Page */}
          <Route exact path="/Products">
            <Products addToCart={this.addToCart} />
          </Route>
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
