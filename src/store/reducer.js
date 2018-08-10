import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        // create a new ingredients object
        // with ... we copy only the state {} obj but not ingredients obj
        ingredients: {
          // copy the ingredients obj too
          ...state.ingredients,
          // overwrite a prop
          // [] does not create an array but access a prop
          // ingredientName is a payload to action
          // in this way we add an ingredient
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        // create a new ingredients object
        // with ... we copy only the state {} obj but not ingredients obj
        ingredients: {
          // copy the ingredients obj too
          ...state.ingredients,
          // overwrite a prop
          // [] does not create an array but access a prop
          // ingredientName is a payload to action
          // in this way we add remove an ingredient
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      }

    default:
      return state;
  }
};

export default reducer;
