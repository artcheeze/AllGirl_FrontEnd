import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'
import { Route } from "react-router-dom";
import App from './App';
import { FaArrowAltCircleLeft, FaMoneyBillWave, FaStarHalf, FaStar } from 'react-icons/fa';


class ProductDetail extends Component {


	state = {
		content: [],
		clicked: false,
		name: "",
		price: "",
	}

	componentDidMount() {
		fetch('http://localhost:8080/Product').then(ress => ress.json()).then(resJ => {
			for (var i = 0; i < resJ.length; i++) {
				if (resJ[i].prodId === this.props.id) {
					console.log(resJ[i])
					this.setState({
						name: resJ[i].prodName,
						price: resJ[i].prodPrice
					})
				}

			}
		}).then(() =>

			fetch('http://localhost:8080/productdetail/?id=' + this.props.id).then(res => res.json()).then(j => {

				var cont = (
					<div style={{position:'fixed'}} class="mb-3 animated bounceInRight  delay-1s" >
						<img class="card-img-top" src={j[0].prodImage} />
						<div class="card-body">
							<h4 class="card-title">{this.state.name}</h4>
							<p class="card-text"><small class="text-muted ">{j[0].prodDetail}</small></p>
							<h3 class="card-text text-success"> <FaMoneyBillWave /> {this.state.price} บาท</h3>
							<p class="text-warning"> <FaStar /><FaStar /><FaStar /><FaStarHalf /> (48)</p>
						</div>
					</div>
				)
				this.setState({ content: cont })
			})



		)












	}


	render() {
		return (
			<div>
				
				{
					this.state.clicked ?
						<Route path="/" component={() => <App />} />

						:

					<div>
						<div style={{position:'absolute',top:'25%',left:'33%'}} class="loader"></div>
						<div className="animated bounceInDown" >
							<Header name={'รายละเอียดสินค้า'} />
							<a style={{ position: 'absolute', zIndex: 12, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ clicked: true })}><FaArrowAltCircleLeft /></a>
							<div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '18%' }} >

							</div>
							{
								this.state.content
							}


						</div>
						<div class="d-flex bd-highlight animated slideInUp " style={{ position:'fixed',backgroundColor: 'orange',bottom:'0px',width:'100%',height:'9%'}}>
							<div class="p-2  bd-highlight text-center">  แชท</div>
							<div class="p-2 flex-grow-1 bd-highlight text-center">ซื้ออออออออ</div>
							
						</div>
					</div>






				}

			</div>



		);
	}
}

export default ProductDetail;
