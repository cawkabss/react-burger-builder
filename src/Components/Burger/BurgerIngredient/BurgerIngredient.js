import React,  { Component } from 'react';

import PropTypes from 'prop-types';

import './BurgerIngredients.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch(props.type){

            case 'bread-bottom':
                ingredient = <div className="bread-bottom"/>;
                break;

            case 'bread-top':
                ingredient = (
                    <div className="bread-top">
                        <div className="seeds-1"/>
                        <div className="seeds-2"/>
                    </div>
                );
                break;

            case 'meat':
                ingredient = <div className="meat"/>;
                break;

            case 'cheese':
                ingredient = <div className="cheese"/>;
                break;

            case 'bacon':
                ingredient = <div className="bacon"/>;
                break;

            case 'salad':
                ingredient = <div className="salad"/>;
                break;

            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;