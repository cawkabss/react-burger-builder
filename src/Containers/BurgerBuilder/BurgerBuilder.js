import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import BurgerIngredient from "../../Components/Burger/BurgerIngredient/BurgerIngredient";

class BurgerBuilder extends Component{
    render () {
        return (
            <Wrapper>
                <BurgerIngredient />
                <div>Burger Controls</div>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;