import React from 'react';

import logo from '../../assets/imgs/logo.png';
import Navigation from "../Navigation/Navigation";
import './SideDrawer.css'
import Wrapper from "../../hoc/Wrapper";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
    return(
        <Wrapper>
            <Backdrop show={ props.show } clicked={ props.sideDrawerToogle }/>
            <div className={ `sideDrawer ${ props.show ? 'open': 'close' }` }>
                <img className="logo" src={ logo } alt={logo} />
                <Navigation />
            </div>
        </Wrapper>
    )
};

export default sideDrawer;