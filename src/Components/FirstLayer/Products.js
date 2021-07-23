import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./firstLayer.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount = async () => {
    let response = [];
    try {
      response = await axios.get(`${process.env.REACT_APP_SERVER}/getlists`);
    } catch (error) {
      console.log("response %" + error);
    }
    this.setState({
      products: response.data,
    });
  };

  render() {
    return (
      <>
        {this.state.products.map((element, index) => {
          return (
            <div key={index} className="cardProductDiv">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{element.original_title}</Card.Title>
                  <Card.Text>{element.overview}</Card.Text>
                  <Button
                    onClick={() => this.props.addToCart(index, element)}
                    variant="primary"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}

export default Products;
