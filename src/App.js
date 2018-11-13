import React, { Component } from 'react';
import Header from './asset/Header'
import './css/App.css'

class App extends Component {

detail = {
	DataArray:[]
}

componentDidMount(){
	fetch('http://localhost:8080/App').then(res => console.log())
}

  render() {
    return (

      <div>
        <Header name={'สินค้าทั้งหมด'} />

        {/* <body>




  
 <header class="header">
  <nav class="header" >
   
    <nav class="col-xs-12 text-center" style="background-color: #CCD3F7  ">
       
       
          <h1 style="font-size: 20px " align="center">รายการสินค้า</h1>     
     </nav>
  </nav>
</header>



<div class="container-fluid" >

<table class="showProduct" align="center">
	<tbody>
		 <tr>
          <td class="productRow" >
          	
   
				<p> 
    				<img id="productImage" align="center" src="shoes.jpg" alt="รองเท้ากีฬาผ้าใบ" width="300" height="300"  >
				</p>
			</div>
			  </div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >รองเท้ากีฬาผ้าใบ</h2>
          <h2 id="productPrice" class="productPrice" style="font-size: 16px ; font-weight: bold  "  >฿ 990</h2>

  
  </div>

            </td>

                       <td class="productRow" >
          	
         	
				<p> 
    				<img id="productImage" align="center" src="jeans.jpeg" alt="กางเกงยีนส์สตรี" width="300" height="300"  />
				</p>
			</div>
			</div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >กางเกงยีนส์สตรี</h2>
          <h2 id="productPrice" class="productP
          rice" style="font-size: 16px ; font-weight: bold  "  >฿ 490</h2>
        
    
  </div>

            </td>
        

        </tr>


		 <tr>
          <td class="productRow" >
          	
         	
				<p> 
    				<img id="productImage" align="center" src="bag.png" alt="กระเป่าเป้สะพายหลังสีเหลืองสดใส" width="300" height="300"  >
				</p>
			</div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >กระเป่าเป้สะพายหลังสีเหลืองสดใส</h2>
          <h2 id="productPrice" class="productPrice" style="font-size: 16px ; font-weight: bold  "  >฿ 790</h2>
         
    </div>
  </div>

            </td>

                       <td class="productRow" >
          	
         	
				<p> 
    				<img id="productImage" align="center" src="shirt.jpg" alt="เสื้อยืดสีพื้น" width="300" height="300"  >
				</p>
			</div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >เสื้อยืดสีพื้น</h2>
          <h2 id="productPrice" class="productPrice" style="font-size: 16px ; font-weight: bold  "  >฿ 150</h2>
         
    </div>
  </div>

            </td>
        

        </tr>

 		 <tr>
          <td class="productRow" >
          	
         	
				<p> 
    				<img id="productImage" align="center" src="hoodie.jpg" alt="เสื้อฮู้ดผ้าหนา" width="300" height="300"  >
				</p>
			</div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >เสื้อฮู้ดผ้าหนา</h2>
          <h2 id="productPrice" class="productPrice" style="font-size: 16px ; font-weight: bold  "  >฿ 1,190</h2>
          
    </div>
  </div>

            </td>

                       <td class="productRow" >
          	
         	
				<p> 
    				<img id="productImage" align="center" src="longSleeveShirst.png" alt="เสื้อยืดแขนยาว" width="300" height="300"  >
				</p>
			</div>
          <h2 id="productName" class="productName" style="font-size: 16px  ; font-weight: bold  "  >เสื้อยืดแขนยาว</h2>
          <h2 id="productPrice" class="productPrice" style="font-size: 16px ; font-weight: bold  "  >฿ 990</h2>
          
    </div>
  </div>
 
            </td>
        

        </tr>


	</tbody>

</table>
 
</div> */}


      </div>
    );
  }
}

export default App;
