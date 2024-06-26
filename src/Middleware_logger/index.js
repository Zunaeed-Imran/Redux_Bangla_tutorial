import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


// Product State
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};


// product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};


// productReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };
    default:
      return state;
  }
};


// store
const store = createStore(productReducer, applyMiddleware(logger.default));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("mobile"));
