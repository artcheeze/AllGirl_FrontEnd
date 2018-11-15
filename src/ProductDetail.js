import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'
import { Route } from "react-router-dom";
import App from './App';
import { FaArrowAltCircleLeft, FaMoneyBillWave, FaStarHalfAlt, FaStar, FaCartPlus, FaRocketchat } from 'react-icons/fa';


class ProductDetail extends Component {


	state = {
		content: [],
		clicked: false,
		name: "",
		price: "",
		buyIt: false
	}

	componentDidMount() {
		fetch('http://localhost:8080/Product').then(ress => ress.json()).then(resJ => {
			for (var i = 0; i < resJ.length; i++) {
				if (resJ[i].prodId === this.props.id) {
					this.setState({
						name: resJ[i].prodName,
						price: resJ[i].prodPrice
					})
				}

			}
		}).then(() =>

			fetch('http://localhost:8080/productdetail/').then(res => res.json()).then(j => {
				j.forEach(e => {
					if (e.prodId === this.props.id) {

						var cont = (
							<div style={{ position: 'fixed' }} class="mb-3 animated bounceInRight  delay-1s" >
								<img class="card-img-top" src={e.prodImage} />
								<div class="card-body">
									<h4 class="card-title">{this.state.name}</h4>
									<span class="badge badge-secondary">ยี่ห้อ : {e.prodBrand}</span>&nbsp;
										<span class="badge badge-secondary">ประเภท : {e.prodCategory}</span>
									<p class="card-text" style={{ textIndent: '10%', fontSize: '20px' }}><small class="text-muted ">{e.prodDetail}</small></p>
									<h3 class="card-text text-success" > <FaMoneyBillWave /> {this.state.price} บาท</h3>
									<p class="text-warning" > <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> ({Math.floor(Math.random() * Math.floor(999))})</p>

								</div>
							</div>
						)
						this.setState({ content: cont })
					}
				})



			})



		)












	}


	render() {
		return (
			<div>

				{
					this.state.clicked ?
						<Route path="/" component={() => <App pic={this.props.pic} />} />

						:

						<div>
							<div style={{ position: 'absolute', top: '25%', left: '33%' }} class="loader"></div>

							<div className="animated bounceInDown" style={{ position: 'fixed', width: '100%', zIndex: 15 }}>
								<Header pic={this.props.pic} name={'รายละเอียดสินค้า'} />
								<a style={{ position: 'fixed', zIndex: 13, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ clicked: true })}><FaArrowAltCircleLeft /></a>
							</div>

							<div className="animated bounceInDown " >

								<div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '18%' }} >

								</div>

								{
									this.state.content
								}













								<div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '1000px' }} >

								</div>





							</div>

							<div class="d-flex bd-highlight animated slideInUp " style={{ position: 'fixed', bottom: '-1px', width: '100%', height: '9%', color: 'white' }}>



								{
									this.state.buyIt ?

										(
											<div class="text-center animated slideInUp" style={{ zIndex: 100, padding: '10px', position: 'absolute', backgroundColor: '#ededed', marginTop: '-35%', borderRadius: '10px', width: '101%', height: '340%', color: 'black', left: '-1px' }} >



												<div class="row " >
													<div class="col">
														สี
   													 </div>

												</div>



												<div class="row " style={{ justifyContent: 'center' }}>
													<div class="btn-group btn-group-toggle" data-toggle="buttons">


														<label class="btn btn-secondary">
															<input type="radio" name="options" id="option2" autocomplete="off" /> Active
  														</label>


													</div>
												</div>
												{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

												<div class="row">
													<div class="col">
														ขนาด
   										 </div>

												</div>


												<div class="row " style={{ justifyContent: 'center' }}>
													<div class="btn-group btn-group-toggle" data-toggle="buttons2">

														<label class="btn btn-secondary">
															<input type="radio" name="options" id="option1" autocomplete="off" /> Active
  														</label>

													</div>
												</div>


												{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

												<button type="button" class="btn btn-success" style={{ marginTop: '5%' }}>ตกลง</button>

												<button type="button" class="close" aria-label="Close" >
													<span aria-hidden="true" style={{ position: 'absolute', fontSize: '50px', top: '0px', right: '20px' }} onClick={() => { this.setState({ buyIt: false }) }}>&times;</span>
												</button>

											</div>
										)
										:
										""
								}








								<div class="p-2  bd-highlight text-center" id="Chat" style={{ backgroundColor: '#4da6ff', width: '30%' }}><h5><FaRocketchat /><br />แชท</h5></div>
								<div class="p-2 flex-grow-1 bd-highlight text-center" id="Chat" style={{ backgroundColor: '#ff8c28' }} onClick={() => { this.setState({ buyIt: true }) }}><h5><FaCartPlus /><br />ซื้อเลยโว้ยยย</h5></div>

							</div>


						</div>






				}




			</div>



		);
	}
}

export default ProductDetail;
