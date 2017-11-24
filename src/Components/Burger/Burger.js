import React from 'react';

import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let ingredients = props.ingredients.map( (ing, i)  => {
        return <BurgerIngredient key={ing.id} type={ ing.type }/>
    });

    if( ingredients.length === 0){
        ingredients = <p>Please start Adding ingredients!</p>
    }

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
                { ingredients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;