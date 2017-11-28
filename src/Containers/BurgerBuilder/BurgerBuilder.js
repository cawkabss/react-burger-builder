import React, {Component} from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';

import Wrapper from '../../hoc/Wrapper';
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from "../../UI/Spinner/Spinner";
import * as actionTypes from "../../store/actions";


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
        // axios.get('/allowedIngredients.json').then( res => {
        //     this.setState({
        //         allowedIngredients: res.data
        //     })
        // }).catch( err => {
        //     this.setState({
        //         error: true
        //     })
        // })
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

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    };

    render() {

        let orderSummary= null;

        let burger = this.state.error ? <p>The ingredients can`t be loaded. Try again later.</p> : <Spinner />;

        if (this.props.allowedIng){

            burger = (
                <Wrapper>
                    <Burger ingredients={this.props.choosingIng}/>
                    <BuildControls
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        choosingIngredients={this.props.choosingIng}
                        price={this.props.price}
                        purchasable={ !!this.props.choosingIng.length }
                        ordered={this.purchaseHandler}/>
                </Wrapper>
            );

            orderSummary = <OrderSummary
                choosingIngredients={this.props.choosingIng}
                totalPrice={this.props.price}
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

const mapStateToProps = state => {
    return {
        allowedIng: state.allowedIngredients,
        choosingIng: state.choosingIngredients,
        price: state.totalPrice
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientType) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientType}) ,
        onIngredientRemoved: (ingredientType) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientType})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));