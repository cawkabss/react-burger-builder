import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from "./Containers/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import Orders from "./Containers/Orders/Orders";

class App extends Component {
  render() {
    return (
        <Layout>
            <Route path="/" exact component={ BurgerBuilder }/>
            <Route path="/checkout" component={ Checkout }/>
            <Route path="/orders" component={ Orders } />
        </Layout>
    );
  }
}

export default App;
