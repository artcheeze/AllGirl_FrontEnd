import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    let {name} = this.props
    return (
      <div>
        <div id="Header" className="d-flex justify-content-between w-100">

          <div className="d-flex align-items-center">
          <img src='..\logo.png' style={{position:'absolute',left:'1%'}} width="25%" alt="รูปนะ"/>
          </div>

          <div className="d-flex align-items-center">
          <h4 style={{position:'relative',top:'10%'}}>{name}</h4>
          </div>

          <div className="d-flex align-items-center">
          </div>

        </div>












      </div>
    );
  }
}

export default Header;
