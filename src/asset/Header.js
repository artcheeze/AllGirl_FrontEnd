import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    let {name} = this.props
    return (
      <div style={{position:'fixed',width:'100%',zIndex:10}}>
        <div id="Header" className="d-flex justify-content-between w-100">

          <div className="d-flex align-items-center">
          <img src='..\logo.png' style={{position:'absolute',left:'38%',top:'0px'}} width="25%" alt="รูปนะ"/>
          </div>

          <div className="d-flex align-items-center">
          <h5 style={{position:'relative',top:'20%'}}>{name}</h5>
          </div>

          <div className="d-flex align-items-center">
          </div>

        </div>












      </div>
    );
  }
}

export default Header;
