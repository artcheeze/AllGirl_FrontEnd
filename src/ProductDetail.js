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
        
         <nav class="header" style={{backgroundColor: "#CCD3F7"}} >
    		<nav class="col-xs-12 text-center" style={{backgroundColor: "#CCD3F7"}}>
       			<img  src="arrow.png" alt="arrow" class="arrow" align="left"/>
       			<Header name={'รายละเอียดสินค้า'} />
     		</nav>
  		</nav>




      </div>

    );
  }
}

export default ProductDetail;
