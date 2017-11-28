import React from 'react';

import Burder from '../../Burger/Burger';
import Button from "../../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>We hope it tasted will!</h1>
            <Burder ingredients={ props.ingredients }/>
            <div className="checkout-summary-actions">
                <Button btnType="danger" clicked={props.checkoutCanceled}>cancel</Button>
                <Button btnType="success" clicked={props.checkoutContinued}>continue</Button>
            </div>
        </div>
    )
};

export default checkoutSummary;