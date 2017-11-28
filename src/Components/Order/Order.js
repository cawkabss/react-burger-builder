import React from 'react';

import './Order.css';

const order = (props) => {

    const transformedIngredients = [];

    for (let key in props.ingredients ){
        let ingredientCapitalize = key.charAt(0).toUpperCase() + key.slice(1);

        transformedIngredients.push({
            type: ingredientCapitalize,
            count: props.ingredients[key]
        })
    }

    const ingredients = transformedIngredients
        .map( ingredient => `${ingredient.type}(${ingredient.count})`).join(', ');

    return (
        <div className="order-item">
            <p>Ingredients: { ingredients }</p>
            <p>Price: <strong>{props.price}$</strong></p>
        </div>
    )

};


export default order;