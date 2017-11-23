import React from 'react';

import Wrapper from "../../hoc/Wrapper";
import './Layout.css';

const Layout = (props) => (
    <Wrapper>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="main-content">
            { props.children }
        </main>
    </Wrapper>
);

export default Layout;