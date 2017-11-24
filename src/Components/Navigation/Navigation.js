import React from 'react';

import NavigationItem from "./NavigationItem/NavigationItem";
import './Navigation.css'

const navigationItems = ['Home', 'My Order', 'Builder'];

const navigation = (props) => (
    <nav className="navigation">
        <ul className="navigation-list">
            <NavigationItem isActive link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    </nav>
);

export default navigation;