import React from "react";
import {Modal, Button} from 'react-bootstrap/'

class CheckOutModel extends React.Component {
  render() {
    return (
      <Modal show={this.props.showCheckOutModel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>        
        <Modal.Body>
          <form>
            <input placeholder="Book Name" type="text" name="bookName" />
            <input placeholder="Description" type="text" name="description" />
            <input placeholder="Img url" type="text" name="imgUrl" />
            <select placeholder="State" type="select" name="state">
              <option value="recommended">Recommended</option>
              <option value="topTen">Top Ten</option>
              <option value="readLater">Read Later</option>
            </select>
            <input type="submit"></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>      
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CheckOutModel;
