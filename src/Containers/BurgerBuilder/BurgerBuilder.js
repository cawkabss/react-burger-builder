import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';

class BurgerBuilder extends Component{
    render () {
        return (
            <Wrapper>
                <div>Burger View</div>
                <div>Burger Controls</div>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;