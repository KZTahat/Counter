import React from "react";
import './firstLayer.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <div
      id='footer'
        className="text-center p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
      >
        © 2020 Copyright:
        <a className="text-white" className='gitHub' href="https://github.com/KZTahat">
          GitHub.com//KZTahat
        </a>
      </div>
    );
  }
}

export default Footer;
