import React, {Component} from 'react';

import Wrapper from '../../hoc/Wrapper';
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";

const ALLOWED_INGREDIENTS = [
    {
        type: 'salad',
        price: 0.5
    },
    {
        type: 'meat',
        price: 1.5
    },
    {
        type: 'cheese',
        price: 0.4
    },
    {
        type: 'tomato',
        price: 0.3
    }
];

class BurgerBuilder extends Component {

    state = {
        ingredients: [],
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

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

    addIngredientHandler = (type) => {
        const ingredient = {...ALLOWED_INGREDIENTS.find((ing) => ing.type === type)};
        ingredient.id = new Date().getTime();
        const newIngredients = [ingredient, ...this.state.ingredients ];
        const oldPrice = this.state.totalPrice;
        const newPrice = +(oldPrice + ingredient.price).toFixed(2);
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(newIngredients)
    };

    removeIngredientHandler = (type) => {
        const finedIngredientIndex = this.state.ingredients.findIndex(ing => {
            return ing.type === type;
        });

        if (finedIngredientIndex === -1) {
            return;
        }

        const ingredient = ALLOWED_INGREDIENTS.find((ing) => ing.type === type);

        const newIngredients = [...this.state.ingredients];
        newIngredients.splice(finedIngredientIndex, 1);
        const oldPrice = this.state.totalPrice;
        const newPrice = +(oldPrice - ingredient.price).toFixed(2);
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(newIngredients)
    };

    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancelOrder={this.purchaseCancelHandler}/>
                </Modal>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;