import React,  { Component } from 'react';

import PropTypes from 'prop-types';

import './BurgerIngredients.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch(this.props.type){

            case 'bread-bottom':
                ingredient = <div className="burger-ingredient bread-bottom"/>;
                break;

            case 'bread-top':
                ingredient = (
                    <div className="burger-ingredient bread-top">
                        <i className="seeds1"/>
                        <i className="seeds2"/>
                        <i className="seeds2"/>
                        <i className="seeds2"/>
                        <i className="seeds2"/>
                        <i className="seeds2"/>
                    </div>
                );
                break;

            case 'meat':
                ingredient = <div className="burger-ingredient meat"/>;
                break;

            case 'cheese':
                ingredient = <div className="burger-ingredient cheese"/>;
                break;

            case 'tomato':
                ingredient = <div className="burger-ingredient tomato"/>;
                break;

            case 'salad':
                ingredient = <div className="burger-ingredient salad"/>;
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