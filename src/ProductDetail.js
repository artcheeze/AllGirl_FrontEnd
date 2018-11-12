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
     	
		<div class="productPic" align="center"> 	
    	<img id="productImage" align="center" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา" / >		
		</div>





		<div class="footer">
        <table class="footer">
        	<tbody>
           		<tr>
           		<td class="chat" ><img id="chat" alt="chat" src="chat.png"/><br/>เเชท</td>
             		 <td class="buyProduct" >ซื้อสินค้า</td>
           		</tr>
        	</tbody>
      	</table>
      	</div>



	
		</div>



    );
  }
}

export default ProductDetail;
