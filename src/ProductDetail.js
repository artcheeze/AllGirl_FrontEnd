import React, { Component } from 'react';
import Header from './asset/Header'
import './css/ProductDetail.css'
import { Route } from "react-router-dom";
import App from './App';
import Ordering from './Ordering';
import { FaArrowAltCircleLeft, FaMoneyBillWave, FaStarHalfAlt, FaStar, FaCartPlus, FaRocketchat } from 'react-icons/fa';


class ProductDetail extends Component {


	state = {
		content: [],
		clicked: false,
		name: "",
		price: "",
		buyIt: false,

		prodSize: [],
		prodColor: [],

		size: null,
		color: null,
		prodPic: null,

		gopay: false


	}

	componentDidMount() {
		fetch('https://mgapi.ga/Product').then(ress => ress.json()).then(resJ => {
			for (var i = 0; i < resJ.length; i++) {
				if (resJ[i].prodId === this.props.id) {
					this.setState({
						name: resJ[i].prodName,
						price: resJ[i].prodPrice
					})
				}

			}
		}).then(() =>

			fetch('https://mgapi.ga/ProductDetail/').then(res => res.json()).then(j => {
				j.forEach(e => {
					if (e.prodId === this.props.id) {
						this.setState({prodPic: e.prodImage})
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
		fetch('https://mgapi.ga//ProductProperties').then(resp => resp.json()).then(jj => {
			
			var i = ""
			var j = ""

			jj.forEach(e => {
				
				if (e.prodId === this.props.id) {
					i = e.prodColor
					
					if (i !== j) {
						var color = (
							<label style={{ backgroundColor: i, borderColor: i }} class="btn btn-success active">
								<input type="radio" name="options2" id="option2" autocomplete="off" onChange={() => this.setState({ color: i })} />
								<span class="glyphicon glyphicon-ok"></span>
							</label>
						)
						this.setState({ prodColor: this.state.prodColor.concat(color) })
						j = i
					}

					var size = (
						<label class="btn btn-light">
							<input type="radio" name="options" id="group1" autocomplete="off" onChange={() => this.setState({ size: e.prodSize })} /> {e.prodSize}
						</label>
					)

					this.setState({ prodSize: this.state.prodSize.concat(size) })





				}
			})
			// for(var i=0;i<this.state.prodSize.length;i++){
			// 	for(var j=0;j<this.state.prodSize.length;j++){
			// 		if(this.state.prodSize[i].props.children[2]===this.state.prodSize[j].props.children[2]){
			// 			console.log(this.state.prodSize[i].props.children[2])
			// 			console.log(this.state.prodSize[j].props.children[2])

			// 			this.setState({a: this.state.a.concat(this.state.prodSize[j])})
			// 		}else{
			// 			this.setState({a: this.state.a.concat(this.state.prodSize[j])})
			// 		}

			// 	}


			// }
			// console.log(this.state.a)




		})












	}

	ClickToBuy() {
		this.setState({gopay: true})



	}


	render() {
		return (
			<div>

				{
					this.state.clicked ?
						<Route path="/" component={() => <App pic={this.props.pic} email={this.props.email} />} />

						:

						<div id="tent">
							{
								this.state.gopay ?
								<Ordering 
								pic={this.props.pic} 
								id={this.props.id} 
								size={this.state.size} 
								color={this.state.color} 
								prodPic={this.state.prodPic}
								prodName={this.state.name}
								prodPrice={this.state.price}
								email={this.props.email}
								/>
								:
									<div>
										<div style={{ position: 'absolute', top: '25%', left: '33%' }} class="loader"></div>

										<div  style={{ position: 'fixed', width: '100%', zIndex: 15 }}>
											<Header pic={this.props.pic} name={<p class="animated bounceIn">รายละเอียดสินค้า</p>} />
											<a className="animated bounceInDown" style={{ position: 'fixed', zIndex: 13, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ clicked: true })}><FaArrowAltCircleLeft /></a>
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
																	{
																		this.state.size === null ?
																			"เลือกขนาด"
																			:
																			"เลือก " + this.state.size
																	}
																</div>

															</div>



															<div class="row " style={{ justifyContent: 'center' }}>
																<div class="btn-group btn-group-toggle" data-toggle="buttons2" id="group1">

																	{
																		this.state.prodSize.map(e => {
																			return e
																		})
																	}




																</div>
															</div>
															{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

															<div class="row">
																<div class="col">
																	สี
				</div>

															</div>


															<div class="row " style={{ justifyContent: 'center' }}>

																<div class="btn-group" data-toggle="buttons">
																	{
																		this.state.prodColor.map(e => {
																			return e
																		})
																	}


																</div>

															</div>


															{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

															<button type="button" class="btn btn" onClick={() => this.ClickToBuy()} style={{ marginTop: '5%', backgroundColor: '#F65058', color: 'white' }}>ตกลง</button>

															<button type="button" class="close" aria-label="Close" >
																<span aria-hidden="true" style={{ position: 'absolute', fontSize: '50px', top: '0px', right: '20px' }} onClick={() => { this.setState({ buyIt: false, size: null, color: null }) }}>&times;</span>
															</button>

														</div>
													)
													:
													""
											}








											<div class="p-2  bd-highlight text-center" id="Chat" style={{ backgroundColor: '#F65058', width: '30%' }}><h5><FaRocketchat /><br />แชท</h5></div>
											<div class="p-2 flex-grow-1 bd-highlight text-center" id="Chat" style={{ backgroundColor: '#FF6C2F' }} onClick={() => { this.setState({ buyIt: true }) }}><h5><FaCartPlus /><br />ซื้อเลยโว้ยยย</h5></div>

										</div>


									</div>
							}



						</div>






				}




			</div>



		);
	}
}

export default ProductDetail;
