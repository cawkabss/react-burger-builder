import React from 'react';

import Wrapper from "../../../hoc/Wrapper";
import Button from "../../../UI/Button/Button";
import './OrderSummary.css';

const orderSummary = ( props ) => {

    //Calculate count of each ingredient

    const ingredientsCount = {};
    props.ingredients.forEach( ing => { ingredientsCount[ing.type] = (ingredientsCount[ing.type] || 0) + 1; });

    const ingredientSummary = Object.keys(ingredientsCount)
        .map( igKey => {
            if (ingredientsCount[igKey] > 0){
                return <li key={igKey} className="order-summary-ingredient-item">
                    <span>{igKey}</span>: {ingredientsCount[igKey]}
                </li>;
            }
        });

    return (
        <Wrapper>
            <h3 className="order-summary-title">Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul className="order-summary-ingredients-list">
                { ingredientSummary }
            </ul>
            <p><strong>Total price: { props.totalPrice }$</strong></p>
            <p>Continue to Checkout?</p>
            <div className="order-summary-action">
                <Button btnType='danger' clicked={ props.cancelOrder }>cancel</Button>
                <Button btnType='success'>continue</Button>
            </div>
        </Wrapper>
    )
};

export default orderSummary;