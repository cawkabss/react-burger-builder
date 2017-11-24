import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => (
    <li className="navigation-item">
        <a className={`navigation-item-link ${props.isActive ? 'active': null}`}
            href={ props.link }>
            { props.children }
        </a>
    </li>
);

export default navigationItem;