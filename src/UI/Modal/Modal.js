import React, { Component } from 'react';

import './Modal.css';
import Wrapper from "../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate( nextProps, nextState ){
        return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading
    }

    render(){
        return (
            <Wrapper>
                <div className="modal"
                     style={ {
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     } }>
                    { this.props.children }
                </div>
                <Backdrop show={ this.props.show } clicked={ this.props.closeModal } />
            </Wrapper>
        )
    }
}

export default Modal;