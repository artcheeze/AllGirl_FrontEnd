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

        <div class="productPic" align="left">
          <img id="productImage" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา" />
          <div id="detail" align="left">
            <h2 id="productName">เสื้อฮู้ดผ้าหนา</h2>
            <p id="productDetail">ราคา 1,190 บาท</p>
            <p id="productDetail">ยี่ห้อ no brand</p>
            <p id="productDetail">สี เขียวมิ้นท์</p>
            <button type="button" class="button1" id="button1">-</button><span> 1 </span>
            <button type="button" class="button1">+</button>
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
