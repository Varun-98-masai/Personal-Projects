import React from 'react';

import './App.css';
import Headers from './Containers/Headers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Headers/>
      <Switch>
        <Route path='/' exact Component={ProductListing}/>
        <Route path='/product/:productId' exact Component={ProductDetails}/>
        <Route>404 Not Found</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
