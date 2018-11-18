import React, { Component } from 'react';
import Header from './asset/Header'
import { FaHeart, FaStar, FaStarHalfAlt, FaMoneyBillWave } from 'react-icons/fa';
import './css/App.css';
import { Route } from "react-router-dom";
import ProductDetail from './ProductDetail';

class App extends Component {

  state = {
    DataArray: [],
    clicked: false,
    prodId: "",
    name: "",
    userPic: "",
    prodPic: [],


    

  }
  goAway(val) {
    setTimeout(() => {
      this.setState({
        prodId: val,
        clicked: true
      })

    }, 200)

  }
  componentDidMount() {
   
      fetch('https://mgapi.ga/Product', {insecure: true}).then(res => res.json()).then(j => {

        j.forEach(e =>{
          fetch('https://mgapi.ga/ProductDetail/', {insecure: true}).then(ress => ress.json()).then(d => {
            d.forEach(dd=>{

              if(e.prodId === dd.prodId){
                var cont = (

                  <div class="card" id="cardClick" style={{ width: '12rem', height: '17rem', margin: '5px' }} onClick={() => this.goAway(e.prodId)}>
      
                    <img class="card-img-top animated bounceIn" alt="Card image cap" id="imgAppCard" src={dd.prodImage} />
      
                    <div class="card-body">
                      <h5 class="card-text" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.prodName}</h5>
                      <h5 class="card-text text-success"><FaMoneyBillWave /> {e.prodPrice} บาท</h5>
                      <p class="card-text text-secondary" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',fontSize:'4px' }}>{dd.prodDetail}</p>
      
                    </div>
      
                    <div class="d-flex flex-wrap" style={{ position: 'absolute', top: '90%', left: '9%' }}>
                      <p class="text-danger" style={{ fontSize: '13px' }}><FaHeart /> {Math.floor(Math.random() * Math.floor(999))} </p>
                      <p class="text-warning" style={{ fontSize: '13px', marginTop: '-1%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
                    </div>
      
                  </div>
                )
      
                this.setState({ DataArray: this.state.DataArray.concat(cont) });
             
              }


            })
             
          })

        })
    
      })

  }

  render() {
    return (

      <div style={{ backgroundColor: '#efefef' }} >

        {
          this.state.clicked ?
            <Route path="/" component={() => <ProductDetail email={this.props.email} pic={this.props.pic} id={this.state.prodId} />} />
            :
            <div>

              <Header name={<p class="animated bounceIn">สินค้าทั้งหมด</p>} pic={this.props.pic} />


              <div class="d-flex flex-wrap justify-content-center" style={{ marginBottom: '20%' }} >

              </div>
              <div class="d-flex flex-wrap justify-content-center"  >

                {
                  this.state.DataArray.map(e => { return e })
                }

              </div>
            </div>
        }

      </div>






    );
  }
}

export default App;
