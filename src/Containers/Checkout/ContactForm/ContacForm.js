import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../../axios';
import './ContactForm.css';
import Spinner from '../../../UI/Spinner/Spinner';
import Button from "../../../UI/Button/Button";
import Input from '../../../UI/Input/Input';


class ContactForm extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            }
        },
        formValid: false,
        loading: false
    };

    orderHandler = () => {

        const formData = {};
        for( let key in this.state.orderForm ){
            formData[key] = this.state.orderForm[key].value;
        }

        const ingredientsCount = {};
        this.props.choosingIngs
            .forEach( ing => { ingredientsCount[ing.type] = (ingredientsCount[ing.type] || 0) + 1; });

        const order = {
            ingredients: ingredientsCount,
            price: this.props.price,
            customer: formData
        };

        this.setState({
            loading: true
        });

        axios.post('/orders.json', order).then( res => {
            this.setState({
                loading: false
            });

            this.props.history.push('/')

        } )
            .catch( err => {
                this.setState({
                    loading: false
                });
            } )

    };

    inputChangedHandler = (event, identifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[identifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[identifier] = updatedFormElement;

        let formIsValid = true;

        for( let key in updatedOrderForm ){
            formIsValid = updatedOrderForm[key].valid && formIsValid;
        }

        this.setState({
            orderForm: updatedOrderForm,
            formValid: formIsValid
        });
    };

    checkValidity(value, rules){

        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    render(){

        const formElements = [];

        for(let key in this.state.orderForm){
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form className="contact-form" onSubmit={this.orderHandler}>
                {formElements.map( element => (
                    <Input key={element.id}
                           elementType={element.config.elementType}
                           elementConfig={element.config.elementConfig}
                           value={element.config.value}
                           invalid={!element.config.valid}
                           shouldValidate={ element.config.validation }
                           touched={element.config.touched}
                           change={(event) => this.inputChangedHandler(event, element.id)}/>
                ) )}
                <Button btnType='success' disabled={!this.state.formValid}>order</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner />
        }

        return (
            <div className="contact-form-container">
                <h4>Enter your contact data</h4>
                { form }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        choosingIngs: state.choosingIngredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps)(ContactForm);