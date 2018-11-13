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

   







<div class="container-fluid" >

<table class="show-product" align="center">
<tr>
<td>
          <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="shoes.jpg" alt="รองเท้ากีฬาผ้าใบ"></img>
                <div class="card-body">
                   <h5 class="productName"> รองเท้ากีฬาผ้าใบ </h5>
                    <p class="productPrice">฿ 990</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
                 </div>
          </div>
</td>


<td>

            <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="jeans.jpeg" alt="กางเกงยีนส์สตรี"></img>
                <div class="card-body">
                   <h5 class="productName"> กางเกงยีนส์สตรี </h5>
                    <p class="productPrice">฿ 490</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
                 </div>
          </div>

</td>
</tr>

<tr>
<td>
          <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="shoes.jpg" alt="รองเท้ากีฬาผ้าใบ"></img>
                <div class="card-body">
                   <h5 class="productName"> รองเท้ากีฬาผ้าใบ </h5>
                    <p class="productPrice">฿ 990</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
                 </div>
          </div>
</td>


<td>

            <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="bag.png" alt="กระเป่าเป้สะพายหลังสีเหลืองสดใส"></img>
                <div class="card-body">
                   <h5 class="productName"> กระเป่าเป้สะพายหลังสีเหลืองสดใส </h5>
                    <p class="productPrice">฿ 790</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
                 </div>
          </div>

</td>
</tr>

<tr>
<td>
          <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="shirt.jpg" alt="เสื้อยืดสีพื้น"></img>
                <div class="card-body">
                   <h5 class="productName"> เสื้อยืดสีพื้น </h5>
                    <p class="productPrice">฿ 150</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
                 </div>
          </div>
</td>


<td>

            <div class="card" style={{width: '18rem'}}> 
             <img class="productImage" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา"></img>
                <div class="card-body">
                   <h5 class="productName"> เสื้อฮู้ดผ้าหนา </h5>
                    <p class="productPrice">฿ 1,190</p>
                    <a href="#" class="btn btn-primary">ดูรายละเอียดสินค้า</a>
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
