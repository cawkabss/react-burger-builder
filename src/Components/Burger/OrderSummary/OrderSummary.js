import React from 'react';

import Wrapper from "../../../hoc/Wrapper";
import Button from "../../../UI/Button/Button";

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            if (props.ingredients[igKey] > 0){
                return <li key={igKey}><span>{igKey}: {props.ingredients[igKey]}</span></li>;
            }
        });

    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            { ingredientSummary }
            <p><strong>Total price: { props.totalPrice }$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='danger' clicked={ props.cancelOrder }>cancel</Button>
            <Button btnType='success'>continue</Button>
        </Wrapper>
    )
};

export default orderSummary;