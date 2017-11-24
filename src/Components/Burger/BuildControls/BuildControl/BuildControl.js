import React from 'react';

import './BuildControl.css'

const buildControl = ( props ) => {

    return (
        <div className="buildControl">
            <p className="buildControl-label">{ props.label }</p>
            <button
                className="buildControl-btn less"
                onClick={ props.removeIngredient }
                disabled={ props.disabled }>Less</button>
            <button
                className="buildControl-btn more"
                onClick={ props.addIngredient }>More</button>
        </div>
    )
};

export default buildControl;