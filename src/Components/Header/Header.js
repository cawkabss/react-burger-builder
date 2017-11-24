import React from 'react';

import './Header.css';
import Button from "../../UI/Button/Button";
import logo from '../../assets/imgs/logo.png';
import Navigation from "../Navigation/Navigation";

const header = (props) => (
    <header className="header">
        <div className="sideDrawer-btn">
            <Button clicked={ props.sideDrawerToogle }>menu</Button>
        </div>
        <img className="logo" src={ logo } alt="logo" />
        <div className="header-nav">
            <Navigation />
        </div>
    </header>
);

export default header;