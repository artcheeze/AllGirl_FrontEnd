import React, { Component } from 'react';
import './header.css';
import { FaUserSecret } from 'react-icons/fa';

class Header extends Component {
  render() {
    let { name } = this.props
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: 10 }}>
       

        <div id="Header" class="d-flex bd-highlight justify-content-center" >


          <div class="p-2 bd-highlight ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          
          <div class="p-2 bd-highlight text-center">
          <img src='..\logo2.png' style={{marginTop:'-2%'}}width="50%" alt="รูปนะ"/>
            <h5 style={{marginTop:'-2%'}}>{name}</h5>
          </div>


          <div class="p-2 bd-highlight align-items-center" style={{marginTop:'5px',borderColor:'blue'}}>
          {
            this.props.pic === undefined ? 
            <FaUserSecret style={{fontSize:'35px',marginTop:'5px',marginRight:'10px'}}/>
            :
            <img  class="rounded-circle animated tada" src={this.props.pic} alt="asdasd" />
          }
           
          </div>










        </div>












      </div>
    );
  }
}

export default Header;
