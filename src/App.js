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



      <div class="col-md-4">
         <div class="card mb-4">
            <img class="card-img-top" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา" width="400"></img>
            <div class="card-body">
               <h5 class="card-title">เสื้อฮู้ดผ้าหนา</h5>
               <p class="card-text">฿ 1,190</p>
                <a href="#" class="btn btn-danger">ดูรายละเอียดสินค้า</a>

            </div>
         </div>
      </div>




  </div>    
      
   


 
    );
  }
}

export default App;
