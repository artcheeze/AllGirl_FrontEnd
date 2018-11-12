import React, { Component } from 'react';
import Header from './asset/Header'
import './css/AddAddress.css'

class AddAddress extends Component {



  render() {
    return (

      <div>
        <Header name={'ใส่ที่อยู่'} />
        <form class="form-inline">
       <div class="container-fluid">
        <div class="row text-center" style={{margin: '10px'}}>
          <table width="100%"> 
    <tr> <th> <h2 style={{fontSize: '18px'}}> ชื่อนามสกุล </h2></th> 
    <th> <input type="text" class="form-control" id="NameSurname"  style={{width: '180px'}} /></th> </tr>
    
    <tr> <th> <h2 style={{fontSize: '18px'}}>เบอร์</h2></th> 
    <th> <input type="text" class="form-control" id="Telephone"  style={{width: '180px'}} />
    </th> </tr>
     <tr> <th > <h2 style={{fontSize: '18px'}}>รายละเอียดที่อยู่</h2></th> 
    <th> <input type="text" class="form-control" id="address" style={{width: '180px', height: '180px'}}/></th> </tr>
    
    <tr> <th > <h2 style={{fontSize: '18px'}}>ตำบล / แขวง</h2></th> 
    <th> <input type="text" class="form-control" id="subdistrict"  style={{width: '180px'}}/></th> </tr>
    <tr> <th > <h2 style={{fontSize: '18px'}}>อำเภอ / เขต</h2></th> 
    <th> <input type="text" class="form-control" id="city" style={{width: '180px'}} /></th> </tr>
     <tr> <th > <h2 style={{fontSize: '18px'}}>จังหวัด</h2></th> 
    <th> <input type="text" class="form-control" id="province"  style={{width: '180px'}}/></th> </tr>
    <tr> <th > <h2 style={{fontSize: '18px'}}>Postcode</h2></th> 
    <th> <input type="text" class="form-control" id="Postcode" style={{width: '180px'}} /></th> </tr>
  </table>
</div>
<div>
  </div>
 <div align="center"><button type="submit" class="submit" style={{width: '190px', height: '50px'}} > 
 <h3 style={{fontSize: '18px', textAlign: 'center'}}> ยืนยัน </h3> </button></div>



</div>
           </form>
     
		</div>

     
    );
  }
}

export default AddAddress;
