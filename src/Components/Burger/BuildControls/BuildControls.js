import React from 'react';

import BuildControl from "./BuildControl/BuildControl";
import './BuildControls.css';

const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Tomato', type: 'tomato'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

const buildControls = ( props ) => {

    return (
        <div className="buildControls">
            <p>Current price: <strong>{ props.price }$</strong></p>
            { controls.map( ctrl => {

                    const isDisabled = props.ingredients.findIndex( el => el.type === ctrl.type ) === -1;

                    return (
                        <BuildControl
                            key={ ctrl.label }
                            label={ ctrl.label }
                            disabled={ isDisabled }
                            addIngredient={ () => props.addIngredient(ctrl.type) }
                            removeIngredient={ () => props.removeIngredient(ctrl.type) }
                        />
                        )
            }

             )}
            <button
                className="order-btn"
                disabled={ !props.purchasable }
                onClick={ props.ordered }>order now</button>
        </div>
    )
};

export default buildControls;