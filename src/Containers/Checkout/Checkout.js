import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactForm from '../Checkout/ContactForm/ContacForm';

class Checkout extends Component {

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-form')
    };

    render() {

        return (
            <div>
                <CheckoutSummary
                    ingredients={ this.props.choosingIngs }
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={ this.props.match.path + '/contact-form' }
                    component={ ContactForm }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      choosingIngs: state.choosingIngredients
  }
};

export default connect(mapStateToProps)(Checkout);