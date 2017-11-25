import React, { Component } from 'react';

import Wrapper from "../Wrapper";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component{

        state = {
            error: null
        };

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
            });

            axios.interceptors.response.use( res => res, error => {
                this.setState({
                    error: error
                })
            })
        }

        errorConfirmHandler = () => {
            this.setState({
                error: null
            })
        };

        render(){
            return (
                <Wrapper>
                    <Modal show={this.state.error} closeModal={this.errorConfirmHandler}>
                        <h3>Oooops!</h3>
                        <p>{ this.state.error ? this.state.error.message : null }</p>
                        <Button btnType={'danger'} clicked={ this.errorConfirmHandler }>ok</Button>
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            )
        }
    }
};

export default withErrorHandler;