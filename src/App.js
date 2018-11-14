import React, { Component } from 'react';
import Header from './asset/Header'
import { FaHeart,FaStar, FaStarHalf,FaMoneyBillWave } from 'react-icons/fa';
import './css/App.css';
import { Route } from "react-router-dom";
import ProductDetail from './ProductDetail';

class App extends Component {

  state = {
    DataArray: [],
    clicked: false,
    prodId:"",
    name:""
    
  }
  goAway(val){
    setTimeout(()=>{
      this.setState({
        prodId: val,
        clicked: true
      })

    },300)
   
  }
  componentDidMount() {
    fetch('http://35.186.145.63:8080/Product').then(res => res.json()).then(j => {

    j.forEach(el => {
      
      var cont = (
        
        <div class="card" id="cardClick" style={{ width: '12rem', height: '17rem', margin: '5px'}} onClick={() => this.goAway(el.prodId)}>
       
          <img class="card-img-top animated bounceIn" src="https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt="Card image cap" />
          
          <div class="card-body">
            <h4 class="card-text">{el.prodName}</h4>
            <h5 class="card-text text-success"><FaMoneyBillWave/> {el.prodPrice} บาท</h5>
            
          </div>
          
          <div class="d-flex flex-wrap" style={{position:'relative',margin:'10px'}}>
          <p class="text-danger" style={{fontSize:'13px'}}><FaHeart/> 580 </p>
          <p class="text-warning" style={{fontSize:'13px',marginLeft:'30%',marginTop:'-1%'}}><FaStar/><FaStar/><FaStar/><FaStarHalf/></p>
          </div>
         
        </div>
      )

      this.setState({DataArray: this.state.DataArray.concat(cont)});

    });
     
    })
  }

  render() {
    return (
      
      <div style={{backgroundColor:'#efefef'}} >
        {
          this.state.clicked ?
          <Route path="/" component={() => <ProductDetail id={this.state.prodId} />} />
          :
          <div>
         
          <Header name={'สินค้าทั้งหมด'} />
         
        
           <div class="d-flex flex-wrap justify-content-center"style={{marginBottom:'20%'}} >
           
          </div>
          <div class="d-flex flex-wrap justify-content-center"  >
         
            {
              this.state.DataArray.map(e=>{return e})
            }
            
          </div>
        </div>
        }

      </div>
     





    );
  }
}

export default App;
