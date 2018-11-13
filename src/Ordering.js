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








        <div class="footer">
          <table class="footer">
            <tbody>
              <tr>
                <td>ใส่ Code Promotion:
                  <input type="form" class="form-control" id="promotionCode"></input>
                  <button type="button" class="button1" id="button2">ตรวจสอบ code</button></td>
              </tr>
              <tr>
                <td>รวมทั้งหมด: 1,190 บาท
              <button type="button" class="button1" id="button2">ชำระเงิน</button></td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>



    );
  }
}

export default Ordering;
