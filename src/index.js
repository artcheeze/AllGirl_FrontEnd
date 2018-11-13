import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './asset/serviceWorker';

//////////////////////////////////////////////////////////////////////////////////////////////////////

import App from './App'; ////////   โยววววววววววววววววววววววววววววววว
import ProductDetail from './ProductDetail'; ////////   ไหมมมมมมมมมมมมมมมมม
import Ordering from './Ordering'; ////////    พลอยยยยยยยยยยย
import AddAddress from './AddAddress'; ////////   อุ้มมมมมมมมมมมมม
import AddCredit from './AddCredit'; ////////    อุ้มมมมมมมมมมมมม


import Paymentation from './Paymentation'; ////////   อาททททททททททททททททท
import LogIn from './logIn'; ////////  อาทไงจะใครหละ
<<<<<<< HEAD
ReactDOM.render(< Paymentation />, document.getElementById('root'));
=======
ReactDOM.render(<App/>, document.getElementById('root'));
>>>>>>> 8c731f0ac3a5825f61b6cdaec32465f8c8c6c5ba

//////////////////////////////////////////////////////////////////////////////////////////////////////
serviceWorker.unregister();
