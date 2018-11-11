import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'


class ProductDetail extends Component {


detail = {
	DataArray:[]
}

componentDidMount(){
	fetch('http://localhost:8080/ProductDetail').then(res => console.log())
}


  render() {
    return (
      <div>
        <Header name={'รายละเอียดสินค้า'} />
         <nav class="header" >
    		<nav class="col-xs-12 text-center" style={{background-color: '#CCD3F7'}}>
       
       		<a href="#" class="button"><img src="arrow.png" width="35" align="left" style={{margin-top: 10px ; margin-left: 4px}}/></a>
          <h1>รายละเอียดสินค้า</h1>     
     </nav>
  </nav>


    




      </div>
    );
  }
}

export default ProductDetail;
