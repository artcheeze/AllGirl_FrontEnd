import React, { Component } from 'react';
import Header from './asset/Header'
import './css/App.css'

class App extends Component {

detail = {
	DataArray:[]
}

componentDidMount(){
	fetch('http://localhost:8080/App').then(res => console.log())
}

  render() {
    return (

      <div>
        <Header name={'สินค้าทั้งหมด'} />

   




<div class="container-fluid" align="center" >

<table class="showAllProduct" align="center">
<tr>
<td>

  

      <div class="row">
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="shoes.jpg" alt="รองเท้าผ้าใบ"></img>
            <div class="card-body">
               <h5 class="card-title">รองเท้าผ้าใบ</h5>
               <p class="card-text">฿ 990 </p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
      </div>
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="jeans.jpeg" alt="กางเกงยีนส์สตรี"></img>
            <div class="card-body">
               <h5 class="card-title">กางเกงยีนส์สตรี</h5>
               <p class="card-text">฿ 490</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
      </div>


          <div class="row">
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="bag.png" alt="กระเป๋าเป้สีเหลืองสดใส"></img>
            <div class="card-body">
               <h5 class="card-title">กระเป๋าเป้สีเหลืองสดใส</h5>
               <p class="card-text">฿ 790</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
      </div>
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="shirt.jpg" alt="เสื้อยืดสีพื้น"></img>
            <div class="card-body">
               <h5 class="card-title">เสื้อยืดสีพื้น</h5>
               <p class="card-text">฿ 150</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
     </div>


          <div class="row">
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา"></img>
            <div class="card-body">
               <h5 class="card-title">เสื้อฮู้ดผ้าหนา</h5>
               <p class="card-text">฿ 1,190</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
      </div>
      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="longSleeveShirst.png" alt="เสื้อยืดแขนยาว"></img>
            <div class="card-body">
               <h5 class="card-title">เสื้อยืดแขนยาว</h5>
               <p class="card-text">฿ 990</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>
            </div>
         </div>
     </div>
     </div>
     </div>

   </div>


       </td>
  </tr>
  </table>


     </div>

 

  </div>    
      
   


 
    );
  }
}

export default App;
