import React, { Component } from 'react';
import Header from './asset/Header'
import './css/Ordering.css'
import { FaArrowAltCircleLeft,FaPlus,FaMinus,FaTag } from 'react-icons/fa';
import ProductDetail from './ProductDetail';
import { Route } from "react-router-dom";

class Ordering extends Component {
  state = {
    clicked: false,
    quantity:1
  }
  componentDidMount() {
    console.log(this.props.id + "---" + this.props.color + "---" + this.props.size)
    console.log(this.props.prodPic)
  }

  QuantityManage(val){
    if(val === "p"){
      this.setState({quantity: this.state.quantity+1})
    }else{
      if(this.state.quantity > 1){
        this.setState({quantity: this.state.quantity-1})
      }else{
        alert('ขั้นต่ำ 1 ชิ้น')
      }
      
    }
  }

  render() {
    return (
      <div>
        {
          this.state.clicked ?
            <Route path="/" component={() => <ProductDetail pic={this.props.pic} id={this.props.id} />} />
            :
            <div>
              <div className="animated bounceInDown" style={{ position: 'fixed', width: '100%', zIndex: 15 }}>
                <Header pic={this.props.pic} name={'สั่งซื้อสินค้า'} />
                <a style={{ position: 'fixed', zIndex: 13, fontSize: '40px', color: 'white', margin: '10px' }} onClick={() => this.setState({ clicked: true })}><FaArrowAltCircleLeft /></a>
              </div>

              <div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '18%', backgroundColor: '#ededed' }} >

              </div>

              <div style={{ position: 'fixed', backgroundColor: '#ededed', width: '100%', height: '100%', color: 'black', padding: '15px' }} >


                <div class="card animated fadeIn" style={{ width: '24rem',height: '13rem' }}>
                  <img class="card-img-top" id="imgAppCard" src={this.props.prodPic} />
                  <div class="card-body">
                  <div style={{position:'absolute',marginTop:'-25%'}}><span class="badge badge-secondary">ขนาด : {this.props.size}</span><br/><span class="badge badge-secondary">สี : {this.props.color}</span></div>
                    <h4 class="card-title text-secondary " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.prodName}</h4>
                 

                      <div class="row">
                        <h5 style={{marginTop:'-2%'}} class="col ">จำนวน </h5>
                        <h5 style={{marginTop:'-2%',marginLeft:'26%'}}class="col">
                        <FaMinus style={{backgroundColor:'#ff9393',color:'white',borderRadius:'30px'}} onClick={()=>this.QuantityManage('m')} />
                        &nbsp;&nbsp;&nbsp;{this.state.quantity}&nbsp;&nbsp;&nbsp;
                        <FaPlus style={{backgroundColor:'#93bcff',color:'white',borderRadius:'30px'}} onClick={()=>this.QuantityManage('p')}/></h5>
                        <h6 class="w-100"></h6>
                        <h6 style={{marginTop:'-2%'}}class="col">ราคา</h6>
                     
                        <h6 style={{marginTop:'-2%',marginLeft:'15%'}}class="col text-success"><FaTag/> {this.props.prodPrice} บาท/ชิ้น</h6>
                      </div>
                   

                  </div>
                </div>







              </div>


            </div>
        }


      </div>




    );
  }
}

export default Ordering;
