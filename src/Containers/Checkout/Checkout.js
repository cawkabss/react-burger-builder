import React, { Component } from 'react';

import CheckoutSummary from '../../Components/Order/CheckoutSummary';

class Checkout extends Component {

    state= {
        choosingIngredients: []
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={ this.state.choosingIngredients } />
            </div>
        )
    }
}

export default Checkout;