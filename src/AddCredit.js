import React, { Component } from 'react';
import Header from './asset/Header'
import './css/AddCredit.css'

class AddCredit extends Component {



  render() {
    return (

      <div>
        <Header name={'ใส่เลขบัตรเครดิต'} />
       
     <form class="form-inline">
       <div class="container-fluid">
        <div class="row text-center" style={{margin: '10px'}}>
          <table> 
    <tr> <th > <h2 style={{fontSize: '20px'}}>ชื่อที่ปรากฎบนบัตร</h2></th> 
    <th> <input type="text" class="form-control" id="Nameoncard" placeholder="Nameoncard" style={{width: '200px'}} /></th> </tr>
    
    <tr> <th > <h2 style={{fontSize: '20px'}}>หมายเลขบัตร</h2></th> 
    <th> <input type="text" class="form-control" id="Num1" placeholder="Numoncard" style={{width: '200px'}} />
    </th> </tr>
    
    <tr> 
      
      <th ><h2 style={{fontSize: '20px'}}>ประเภทบัตร</h2></th> 

      <th style={{display: 'flex',width: '220px' ,marginTop:'10px'}}>
      <input type="text" name="card" class="form-control" />
        <div style={{marginLeft: '5px' ,display: 'flex'}}>
          <div id="Num3"style={{width: '30px',height: '34px'}}>
         
        </div> 
         <div id="Num2"style={{width: '30px',height: '34px'}}>
            </div>
        </div> 
      </th>

  
  </tr>
    
    <tr> <th > <h2 style={{fontSize: '20px'}}>วันหมดอายุ</h2></th> 
    <th> <input type="text" class="form-control" id="Expired" placeholder="MM/YY" style={{width: '200px'}} /></th> </tr>
    
    <tr> <th > <h2 style={{fontSize: '20px'}}>CVV</h2></th> 
    <th> <input type="text" class="form-control" id="CVV" placeholder="CVV" style={{width: '200px'}} /></th> </tr>
    <tr> <th > <h2 style={{fontSize: '20px'}}>ที่อยู่ในการวางบิล</h2></th> 
    <th> <input type="text" class="form-control" id="Address" placeholder="Address" style={{width: '200px', height: '150px'}} /></th> </tr>
  </table>
</div>
<div>
  </div>
 <div align="center"><button type="submit" class="submit" style={{width: '190px', height: '50px'}} > 
 <h3 style={{fontSize: '18px', textAlign: 'center'}}> ยืนยันการชำระเงิน </h3> </button></div>




            </div>
            </form>
         </div> 


    );
  }
}

export default AddCredit;
