import React from 'react';

import Wrapper from "../../../hoc/Wrapper";

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            if (props.ingredients[igKey] > 0){
                return <li><span>{igKey}: {props.ingredients[igKey]}</span></li>;
            }
        });

    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            { ingredientSummary }
            <p>Continue to Checkout?</p>
        </Wrapper>
    )
};

export default orderSummary;