import React, { Component } from 'react';
import Header from './asset/Header'
import './css/Ordering.css'

class Ordering extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/Ordering').then(res => console.log())
  }

  render() {
    return (

      <div>
        <Header name={'สั่งซื้อสินค้า'} />


        <div class="container">
          <div class="row">
            <div class="col"><div class="productPic" align="left">
              <img id="productImage" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา" /></div></div>
            <div class="col">
              <h2 id="productName">เสื้อฮู้ดผ้าหนา</h2><hr></hr>
              <p id="productDetail">ราคา 1,190 บาท</p>
              <p id="productDetail">ยี่ห้อ no brand</p>
              <p id="productDetail">สี เขียวมิ้นท์</p></div>
          </div>
        </div>


        <div class="container">
          <div class="row">
            <p id="productQuantity1">จำนวน</p><button type="button" class="btn" id="button1">-</button>
            <p id="productQuantity2">1</p>
            <button type="button" class="btn" id="button1">+</button>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <p id="productSize">Size</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label class="radio-inline">
              <input type="radio" name="optradio" checked />&nbsp;S
          </label>&nbsp;&nbsp;
            <label class="radio-inline">
              <input type="radio" name="optradio" />&nbsp;M
          </label>&nbsp;&nbsp;
            <label class="radio-inline">
              <input type="radio" name="optradio" />&nbsp;L
          </label>&nbsp;&nbsp;
            <label class="radio-inline">
              <input type="radio" name="optradio" />&nbsp;XL
          </label>
          </div>
        
          <div class="row">
            <p id="price">รวมราคา&nbsp; 1,190&nbsp; บาท</p>
          </div>

        <hr></hr>

        
          
          <div class="row">
          
            <div class="input-group mb-3">
            <p id="promotionCode">Promotion Code: &nbsp;</p>
              <input type="text" class="form-control" id="textCheckCode" placeholder="Promotion Code" aria-label="Promotion Code" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-info btn-sm" id="btnCheckCode" type="button">Check</button>
              </div>
            </div>
          </div>
          <div class="row">
            <p id="totalPrice">ราคาทั้งหมด&nbsp; 1,090&nbsp; บาท</p>
            <button class="btn btn-info btn-sm" id="btnPayment" type="button">ชำระเงิน</button>
          </div>
        </div>







      </div>



    );
  }
}

export default Ordering;
