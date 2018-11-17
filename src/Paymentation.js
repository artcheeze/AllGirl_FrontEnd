import React, { Component } from 'react';
import Header from './asset/Header'
import './css/App.css'
import { each } from 'bluebird';
import { FaCcVisa, FaTimes } from 'react-icons/fa';

class Paymentation extends Component {
  state = {
    cardBrand: "",
    cardColor: "red"
  }
  componentDidMount() {

    var { OmiseCard } = window

    OmiseCard.configure({
      publicKey: 'pkey_test_5dwrs15v3vx4cildg78',
      amount: 1000,
      currency: 'thb',
      image: 'https://lh4.googleusercontent.com/GycN66ZMw_Hz3JEmoHHeU4F3AlpnL2na3SXPHDLAPW5UlXuQU3yxbsKMBviOCpLT9FxM65QcDgmMcQ=w1600-h799'
    });
    setTimeout(() => {


      OmiseCard.open({
        onCreateTokenSuccess: (token) => {
          console.log(token)
        },
        onFormClosed: function (e) {
          console.log(e)
        },
      })




    }, 500)

  }

  handleSubmit(event) {
    console.log(event.target.value)
  }
  ren
  render() {
    return (

      <div>

       

      </div >
    );
  }
}

export default Paymentation;
