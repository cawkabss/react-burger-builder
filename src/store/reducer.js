import * as actionTypes from './actions';

const initialState = {
    allowedIngredients: [
        {
            type: 'cheese',
            price: 0.3
        },
        {
            type: 'salad',
            price: 0.4
        },
        {
            type: 'meat',
            price: 1.3
        },
        {
            type: 'tomato',
            price: 0.5
        }
    ],
    choosingIngredients: [],
    totalPrice: 4,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:

            const ingredient = {...state.allowedIngredients.find((ing) => ing.type === action.ingredientType)};
            ingredient.id = new Date().getTime();
            const oldChoosingIngredients = state.choosingIngredients.map( ingredient => {
                return {
                    ...ingredient
                }
            } );
            return {
                ...state,
                choosingIngredients: [ingredient,...oldChoosingIngredients],
                totalPrice: +(state.totalPrice + ingredient.price).toFixed(2)
            };

        case actionTypes.REMOVE_INGREDIENT:

            const finedIngredientIndex = state.choosingIngredients.findIndex(ing => {
                return ing.type === action.ingredientType;
            });

            return {
                ...state,
                choosingIngredients: state.choosingIngredients.filter( (ingredient, index) => index !== finedIngredientIndex ),
                totalPrice: +(state.totalPrice - state.choosingIngredients[finedIngredientIndex].price).toFixed(2)
            }
    }
  return {
      ...state
  };
};

export default reducer;