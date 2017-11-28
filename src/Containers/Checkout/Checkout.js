import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactForm from '../Checkout/ContactForm/ContacForm';

class Checkout extends Component {

    state= {
        choosingIngredients: [],
        totalPrice: 0
    };

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = [];
        let totalPrice = 0;

        let i = 0;
        for(let key of query.entries()){

            if(key[0] === 'totalPrice'){
                totalPrice = key[1]
            } else {
                ingredients.push({
                    type: key[1],
                    id: i++
                })
            }
        }

        this.setState({
            choosingIngredients: ingredients,
            totalPrice: totalPrice
        })
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-form')
    };

    render() {

        const ingredientsCount = {};
        this.state.choosingIngredients
            .forEach( ing => { ingredientsCount[ing.type] = (ingredientsCount[ing.type] || 0) + 1; });

        return (
            <div>
                <CheckoutSummary
                    ingredients={ this.state.choosingIngredients }
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={ this.props.match.path + '/contact-form' }
                render={ (props) => <ContactForm ingredientsCount={ ingredientsCount }
                                                 totalPrice={this.state.totalPrice}
                                                 {...props} />}/>
            </div>
        )
    }
}

export default Checkout;