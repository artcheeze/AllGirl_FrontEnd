import React, { Component } from 'react';
import Header from './asset/Header'
import './css/Ordering.css'
import { FaArrowAltCircleLeft, FaPlus, FaMinus, FaTag, FaCalculatorAlt, FaCreditCard } from 'react-icons/fa';
import ProductDetail from './ProductDetail';
import { Route } from "react-router-dom";
import AddAddress from './AddAddress';
class Ordering extends Component {
  state = {
    clicked: false,
    quantity: 1,
    sumPrice: this.props.prodPrice,
    promoCode: [],
    code: "",
    discount: 0,
    total: 0,
    discountState: "",

    goCheckOut: false
  }

  componentDidMount() {

    fetch('http://localhost:8080/PromoCode').then(pc => pc.json()).then(pcj => {
      pcj.forEach(element => {
        this.setState({ promoCode: this.state.promoCode.concat(element) })

      })

    })
    setTimeout(() => {
      this.setState({ total: this.state.sumPrice })
    }, 200)
  }

  QuantityManage(val) {

    if (val === "p") {
      this.setState({ quantity: this.state.quantity + 1 })
      this.setState({ sumPrice: this.state.sumPrice + this.props.prodPrice })
      setTimeout(() => {
        this.setState({ total: this.state.sumPrice - this.state.discount })
      }, 200)

    } else {
      if (this.state.quantity > 1) {
        this.setState({ quantity: this.state.quantity - 1 })
        this.setState({ sumPrice: this.state.sumPrice - this.props.prodPrice })
        setTimeout(() => {
          this.setState({ total: this.state.sumPrice - this.state.discount })
        }, 200)

      } else {
        alert('ขั้นต่ำ 1 ชิ้น')
      }

    }


  }

  checkPromo(e) {
    if (e.target.value.length === 4) {
      if (this.state.total > 1100) {
        this.state.promoCode.forEach(element => {

          if (element.promoCode === e.target.value.toUpperCase()) {

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            let current = y + "-" + m + "-" + d
            let exp = element.expireDate

            if (current > exp) {
              this.setState({
                discountState:
                  [<p class="animated tada" style={{ position: 'absolute', right: '20px', top: '15px', fontSize: '15px', color: 'red' }}>โค้ดหมดอายุแล้วค่ะ</p>]
              })
            } else {
              this.setState({ discount: element.discount, code: element.promoCode })
              this.setState({
                discountState:
                  [<p class="animated tada" style={{ position: 'absolute', right: '20px', top: '15px', fontSize: '15px', color: 'green' }}>โค้ดนี้ใช้งานได้ค่ะ</p>]
              })
              setTimeout(() => {
                this.setState({ total: this.state.sumPrice - this.state.discount })
              }, 200)
            }

          }
        })
      } else {
        this.setState({
          discountState:
            [<p class="animated tada" style={{ position: 'absolute', right: '20px', top: '15px', fontSize: '15px', color: 'red' }}>ต้องมียอดรวมขั้นต่ำ 1100 </p>]
        })
      }

    } else if (e.target.value.length > 4) {
      this.setState({
        discountState:
          [<p class="animated tada" style={{ position: 'absolute', right: '20px', top: '15px', fontSize: '15px', color: 'red' }}>โค้ดไม่ถูกต้อง</p>]
      })
    }
    else if (e.target.value === "") {
      this.setState({ discount: 0 })
      this.setState({ discountState: "" })
      setTimeout(() => {
        this.setState({ total: this.state.sumPrice - this.state.discount })
      }, 200)
    }



  }

  checkOut() {
    this.setState({ goCheckOut: true })
  }

  render() {
    return (




      <div>
        {this.state.goCheckOut ?

          <AddAddress
            pic={this.props.pic}
            id={this.props.id}

            total={this.state.total}
            code={this.state.code}
            quantity={this.state.quantity}

            prodPic={this.props.prodPic}
            prodName={this.props.prodName}
            prodPrice={this.props.prodPrice}
            size={this.props.size}
            color={this.props.color}

          />
          :
          (
            <div>
              {
                this.state.clicked ?
                  <Route path="/" component={() => <ProductDetail pic={this.props.pic} id={this.props.id} />} />
                  :
                  <div>
                    <div style={{ position: 'fixed', width: '100%', zIndex: 15 }}>
                      <Header pic={this.props.pic} name={<p class="animated bounceIn">สั่งซื้อสินค้า</p>} />
                      <a className="animated bounceInDown" style={{ position: 'fixed', zIndex: 13, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ clicked: true })}><FaArrowAltCircleLeft /></a>
                    </div>

                    <div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '18%', backgroundColor: '#ededed' }} >

                    </div>

                    <div style={{ position: 'fixed', backgroundColor: '#ededed', width: '100%', height: '100%', color: 'black', padding: '15px' }} >


                      <div class="card animated fadeIn" style={{ width: '24rem', height: '13rem' }}>
                        <img class="card-img-top" id="imgAppCard" src={this.props.prodPic} />
                        <div class="card-body">
                          <div style={{ position: 'absolute', marginTop: '-25%' }}><span class="badge badge-secondary">ขนาด : {this.props.size}</span><br /><span class="badge badge-secondary">สี : {this.props.color}</span></div>
                          <h4 class="card-title text-secondary " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.prodName}</h4>


                          <div class="row">
                            <h5 style={{ marginTop: '-2%' }} class="col ">จำนวน </h5>
                            <h5 style={{ marginTop: '-2%', marginLeft: '26%' }} class="col">
                              <FaMinus style={{ backgroundColor: '#ff9393', color: 'white', borderRadius: '30px' }} onClick={() => this.QuantityManage('m')} />
                              &nbsp;&nbsp;&nbsp;{this.state.quantity}&nbsp;&nbsp;&nbsp;
                        <FaPlus style={{ backgroundColor: '#93bcff', color: 'white', borderRadius: '30px' }} onClick={() => this.QuantityManage('p')} /></h5>
                            <h6 class="w-100"></h6>
                            <h6 style={{ marginTop: '-2%' }} class="col">ราคา</h6>

                            <h6 style={{ marginTop: '-2%', marginLeft: '15%' }} class="col text-success"><FaTag /> {this.props.prodPrice} บาท/ชิ้น</h6>
                          </div>


                        </div>
                      </div>







                    </div>

                    <div style={{ position: 'fixed', zIndex: 30, bottom: '80px', width: '100%', backgroundColor: 'white' }} class="d-flex bd-highlight align-items-center animated slideInUp">
                      <p style={{ position: 'absolute', marginTop: '-10%', left: '28px', color: '#bababa' }}>ณ เวลานี้ ทางร้านเรารับชำระผ่านบัตรเครดิตเท่านั้นค่ะ!</p>
                      <div class="p-2 flex-fill bd-highlight text-center">

                      </div>

                      <div class="p-2 flex-fill bd-highlight ">
                        <FaCalculatorAlt /> Promo Code
                </div>

                      <div class="p-2 flex-fill bd-highlight text-center">
                        {this.state.discountState}
                        <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="กรอกที่นี่" onChange={(e) => { this.checkPromo(e) }} />
                      </div>


                    </div>
                    <div style={{ position: 'fixed', zIndex: 30, bottom: '0px', width: '100%', backgroundColor: 'white' }} class="d-flex bd-highlight align-items-center animated slideInUp">

                      <div class="p-2 flex-fill bd-highlight text-center">
                        <button type="button" class="btn btn-primary" style={{ width: '130%', height: '50px' }} onClick={() => { this.checkOut() }}>ซื้อ  <FaCreditCard /></button>

                      </div>

                      <div class="p-2 flex-fill bd-highlight text-right">
                        ราคารวม<br />
                        ส่วนลด<br />
                        ราคาสุทธิ
      
                </div>

                      <div class="p-2 flex-fill bd-highlight text-center">

                        {this.state.sumPrice}<br />
                        -{this.state.discount}<br />
                        <div class="text-success animated tada duration-2s infinite"><u>{this.state.total}</u></div>
                      </div>


                    </div>


                  </div>
              }


            </div>
          )

        }



      </div>




    );
  }
}

export default Ordering;
