import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => (
    <li className="navigation-item">
        <NavLink to={ props.link } exact
              className={`navigation-item-link`}>
            { props.children }
        </NavLink>
    </li>
);

export default navigationItem;