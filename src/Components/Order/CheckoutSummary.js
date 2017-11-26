import React from 'react';

import Burder from '../Burger/Burger';
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>We hope it tasted will!</h1>
            <Burder ingredients={ props.ingredients }/>
            <div className="checkout-summary-actions">
                <Button btnType="danger">cancel</Button>
                <Button btnType="success">continue</Button>
            </div>
        </div>
    )
};

export default checkoutSummary;