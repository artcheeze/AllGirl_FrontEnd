import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    let {name} = this.props
    return (
      <div>
        <div id="Header" class="d-flex justify-content-between w-100">

          <div class="d-flex align-items-center">
          <img src='..\logo.png' style={{position:'absolute',left:'3%'}} width="15%"/>
          </div>

          <div class="d-flex align-items-center">
          <h4 style={{position:'relative',top:'10%'}}>{name}</h4>
          </div>

          <div class="d-flex align-items-center">
          </div>

        </div>












      </div>
    );
  }
}

export default Header;
