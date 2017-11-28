import React from 'react';

import NavigationItem from "./NavigationItem/NavigationItem";
import './Navigation.css'

const navigation = (props) => (
    <nav className="navigation">
        <ul className="navigation-list">
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    </nav>
);

export default navigation;