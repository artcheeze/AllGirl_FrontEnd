import React, { Component } from 'react';
import Header from './asset/Header'
import './css/AddAddress.css'
import { FaArrowAltCircleLeft, FaExclamationCircle, FaAngleDoubleRight } from 'react-icons/fa';
import Ordering from './Ordering';



class AddAddress extends Component {
  state = {
    cikBack: false,
    address: "",
    totaly:0
  }

  componentDidMount() {
    let a = this.props.total+"00"
    let b = parseInt(a);
    this.setState({totaly: b})
    
    setTimeout(() => {
      var { OmiseCard } = window

      OmiseCard.configure({
        publicKey: 'pkey_test_5dwrs15v3vx4cildg78',
        amount: b,
        currency:'thb',
        image:'https://lh4.googleusercontent.com/GycN66ZMw_Hz3JEmoHHeU4F3AlpnL2na3SXPHDLAPW5UlXuQU3yxbsKMBviOCpLT9FxM65QcDgmMcQ=w1600-h799'
      });

      OmiseCard.configureButton('#checkout-button', {
        frameLabel: 'Mustache.Girls',
        submitLabel: 'ชำระ',
      });

      OmiseCard.attach();

    }, 1000)

  }

  checkOut() {
 

    fetch('http://localhost:8080/Orders/addOrder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prodId: this.props.id,
        totalPrice: this.props.total,
        promoCode: this.props.code,
        quantity: this.props.quantity,
        paymentStatus: "Paid",
        address: this.state.address

      })
    }).then(res => console.log(res))



  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(event)
    
}
  render() {
    return (

      <div>
        {
          this.state.cikBack ?
            <Ordering
              pic={this.props.pic}
              id={this.props.id}
              prodPic={this.props.prodPic}
              prodName={this.props.prodName}
              prodPrice={this.props.prodPrice}
              size={this.props.size}
              color={this.props.color}
            />
            :
            <div>
              <div style={{ position: 'fixed', width: '100%', zIndex: 15 }}>
                <Header pic={this.props.pic} name={<p class="animated bounceIn">ข้อมูลการจัดส่ง</p>} />
                <a class="animated bounceInDown" style={{ position: 'fixed', zIndex: 13, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ cikBack: true })}><FaArrowAltCircleLeft /></a>
              </div>

              <div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '18%', backgroundColor: '#ededed' }} >

              </div>

              <div style={{ position: 'fixed', backgroundColor: '#ededed', width: '100%', height: '100%', color: 'black', padding: '15px' }} >
                <div class="animated slideInRight">
                  <div style={{ marginTop: '30px' }} class="form-group">
                    <h4><FaAngleDoubleRight /> กรอกข้อมูล</h4>
                    <p style={{ marginTop: '-10px' }} class="text-secondary">( ชื่อ บ้านเลขที่ รหัสไปรษณีย์ เบอร์โทร )</p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" onChange={(e) => { this.setState({ address: e.target.value }) }}></textarea>
                  </div>

                  <p class="text-secondary"><FaExclamationCircle /> ระบบอยู่ระหว่างการพัฒนา - UX/UI อาจยังไม่สมบูรณ์ที่สุด และ ระบบยังไม่สามารถบันทึกที่อยู่ได้</p>
                  <p class="text-secondary"><FaExclamationCircle /> เนื่องจากระบบยังไม่สมบูรณ์ที่สุด ทางเราไม่มีนโยบายเก็บข้อมูลบัตรของผู้ใช้งาน จะใช้การตัดเงินจากระบบตัวแทนภายนอกที่มีความปลอดภัยสูง เช่น Omise </p>
                  
                  <iframe name="votar" style={{display:'none'}}></iframe>
                  <form action="http://localhost:8080/Payment" method="POST" target="votar">
                    <img style={{position:'absolute',bottom:'-8%',right:'18%',opacity:0.5}} src="https://assets2.omise.co/assets/external-logo-a86debcb438f41aa395a868ff43fe67090e277d44dea080cd2d51baec405ea71.svg" width="30%"/>
                    <img style={{position:'absolute',bottom:'-9%',left:'18%',opacity:0.5}} src="https://lh4.googleusercontent.com/GycN66ZMw_Hz3JEmoHHeU4F3AlpnL2na3SXPHDLAPW5UlXuQU3yxbsKMBviOCpLT9FxM65QcDgmMcQ=w1600-h799" width="30%"/>
                    <button style={{ width: '100%', marginTop: '20%' }} type="submit" value="Submit" id="checkout-button" class="btn btn-primary" onClick={() => { this.checkOut() }}>จ่ายเงิน</button>
                    <input type="hidden" id="total" name="total" value={this.state.totaly}/>
                  </form>

                </div>
              </div>











            </div>
        }

      </div>


    );
  }
}

export default AddAddress;
