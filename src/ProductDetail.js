import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'


class ProductDetail extends Component {


	state = {

		DataArray: []
	}

	componentDidMount() {

		fetch('http://35.186.145.63:8080/Product{2}')
			.then(res => res.json())
			.then(resJson => {

				var cont = [
					<div>
						<div class="row" >
							<div class="col-sm-6 col-md-4" >
								<div class="thumbnail"  >
									<img class="image" src="..." alt="..." />
									<div class="caption">
										<h3>{resJson.prodName}</h3>
										<p>{resJson.prodPrice}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				]

				this.setState({ DataArray: this.state.DataArray.concat(cont) })
				console.log(this.state.DataArray)

					;

			})

	}


	render() {
		return (
			<div>
				<Header name={'รายละเอียดสินค้า'} />

				<div class="content">
					{
						this.state.DataArray.map(e => {
							return e
						})

					}
				</div>
				<div class="footer">
					<table class="footer">
						<tbody>
							<tr>
								<td class="chat" ><img id="chat" alt="chat" src="chat.png" /><br />เเชท</td>
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
