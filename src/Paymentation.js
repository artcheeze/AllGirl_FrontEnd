import React, { Component } from 'react';
import Header from './asset/Header'
import './css/App.css'


class Paymentation extends Component {
  componentDidMount(){

    const {OmiseCard} = window;

    OmiseCard.configure({
      publicKey: 'pkey_test_5dwrs15v3vx4cildg78',
      amount: 99500
    });
  
    OmiseCard.configureButton('#checkout-button', {
      frameLabel: 'Merchant name',
      submitLabel: 'PAY RIGHT NOW !',
    });
  OmiseCard.attach();
  


  }
 
  handleSubmit(event) {
    console.log(event.target.value)
  }
  ren
  render() {
    return (

      <div>
        <form enctype="application/json" action="http://localhost:8080/Payment/p" method="post">
          <input type="submit" value="pay" id="checkout-button" ></input>
        </form>


      </div>
    );
  }
}

export default Paymentation;
