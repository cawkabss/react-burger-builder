import React, {Component} from 'react';
import axios from '../../axios';

import Wrapper from '../../hoc/Wrapper';
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from "../../UI/Spinner/Spinner";
import Checkout from "../Checkout/Checkout";


class BurgerBuilder extends Component {

    state = {
        allowedIngredients: null,
        choosingIngredients: [],
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount(){
        axios.get('/allowedIngredients.json').then( res => {
            this.setState({
                allowedIngredients: res.data
            })
        }).catch( err => {
            this.setState({
                error: true
            })
        })
    }

    updatePurchasable(ingredients) {
        this.setState({
            purchasable: !!ingredients.length
        })

    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    purchaseContinueHandler = (ingredients) => {

        const order = {
            ingredients: ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Aleksandr',
                address: {
                    country: 'Ukraine',
                    street: 'Lenina str.',
                    zipCode: '123'
                },
                email: 'aleksanfr.poleleliuk@gmail.com',
                deliveryMethod: 'faster'
            }
        };

        this.setState({
            loading: true
        });

        axios.post('/orders.json', order).then( res => {
            this.setState({
                loading: false,
                purchasing:false
            });
        } )
            .catch( err => {
                this.setState({
                    loading: false,
                    purchasing:false
                });
            } )
    };

    addIngredientHandler = (type) => {

        const ingredient = {...this.state.allowedIngredients.find((ing) => ing.type === type)};
        ingredient.id = new Date().getTime();
        const newIngredients = [ingredient, ...this.state.choosingIngredients ];
        const oldPrice = this.state.totalPrice;
        const newPrice = +(oldPrice + ingredient.price).toFixed(2);
        this.setState({
            choosingIngredients: newIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(newIngredients)
    };

    removeIngredientHandler = (type) => {

        const finedIngredientIndex = this.state.choosingIngredients.findIndex(ing => {
            return ing.type === type;
        });

        if (finedIngredientIndex === -1) {
            return;
        }

        const ingredient = this.state.allowedIngredients.find((ing) => ing.type === type);

        const newIngredients = [...this.state.choosingIngredients];
        newIngredients.splice(finedIngredientIndex, 1);
        const oldPrice = this.state.totalPrice;
        const newPrice = +(oldPrice - ingredient.price).toFixed(2);

        this.setState({
            choosingIngredients: newIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(newIngredients)
    };

    render() {

        let orderSummary= null;

        let burger = this.state.error ? <p>The ingredients can`t be loaded. Try again later.</p> : <Spinner />;

        if (this.state.allowedIngredients){

            burger = (
                <Wrapper>
                    <Burger ingredients={this.state.choosingIngredients}/>
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        choosingIngredients={this.state.choosingIngredients}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}/>
                </Wrapper>
            );

            orderSummary = <OrderSummary
                choosingIngredients={this.state.choosingIngredients}
                totalPrice={this.state.totalPrice}
                cancelOrder={this.purchaseCancelHandler}
                successOrder={this.purchaseContinueHandler}/>
        }

        if( this.state.loading ){
            orderSummary = <Spinner />
        }

        return (
            <Wrapper>
                { burger }
                <Modal show={this.state.purchasing}
                       loading={this.state.loading}
                       closeModal={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
            </Wrapper>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);