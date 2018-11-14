import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'


class ProductDetail extends Component {


state = {

	DataArray:[]
}

componentDidMount(){

	fetch('http://localhost:8080/ProductDetail')
	.then(res => res.Json())
	.then(resJson =>{
		this.setState({
			isLoaded: true
		})
	});
}




  render() {
    return (
    	<div>
      
       		<Header name={'รายละเอียดสินค้า'} />
     	

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
