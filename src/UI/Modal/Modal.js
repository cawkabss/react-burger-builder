import React from 'react';

import './Modal.css';
import Wrapper from "../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Wrapper>
        <div className="modal"
             style={ {
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             } }>
            { props.children }
        </div>
        <Backdrop show={ props.show } clicked={ props.closeModal } />
    </Wrapper>
);

export default modal;