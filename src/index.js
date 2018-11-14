import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './asset/serviceWorker';
import { BrowserRouter } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////////////////////////////

import App from './App'; ////////   โยววววววววววววววววววววววววววววววว
import ProductDetail from './ProductDetail'; ////////   ไหมมมมมมมมมมมมมมมมม
import Ordering from './Ordering'; ////////    พลอยยยยยยยยยยย
import AddAddress from './AddAddress'; ////////   อุ้มมมมมมมมมมมมม
import AddCredit from './AddCredit'; ////////    อุ้มมมมมมมมมมมมม



import Paymentation from './Paymentation'; ////////   อาททททททททททททททททท
import LogIn from './logIn'; ////////  อาทไงจะใครหละ

const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));


//////////////////////////////////////////////////////////////////////////////////////////////////////
serviceWorker.unregister();
