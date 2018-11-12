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

import LogIn from './logIn'; ////////  อาทไงจะใครหละ
ReactDOM.render(<LogIn/>, document.getElementById('root'));

//////////////////////////////////////////////////////////////////////////////////////////////////////
serviceWorker.unregister();
