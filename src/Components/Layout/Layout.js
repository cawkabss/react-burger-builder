import React, { Component } from 'react';

import Wrapper from "../../hoc/Wrapper";
import Header from "../Header/Header";
import './Layout.css';
import SideDrawer from "../SideDrawer/SideDrawer";

class Layout  extends Component{

    state = {
        showSideDrawer: false
    };

    sideDrawerToogle = () => {
        this.setState( prevState => ( {showSideDrawer: !prevState.showSideDrawer}) ) ;
    };

    render(){
        return (
            <Wrapper>
                <Header sideDrawerToogle={ this.sideDrawerToogle }/>
                <SideDrawer show={ this.state.showSideDrawer } sideDrawerToogle={ this.sideDrawerToogle }/>
                <main className="main-content">
                    { this.props.children }
                </main>
            </Wrapper>
        )
    }
}

export default Layout;