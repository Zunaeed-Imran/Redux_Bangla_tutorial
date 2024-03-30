
import { combineReducers, createStore } from "redux";

// product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// card const
const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEM = "ADD_CARD_ITEM";


// Product State
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

// Card State
const initialCardState = {
  cards: ["Sugar"],
  numberofCards: 1,
}



// product action 
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

// card action
const getCards = () => {
  return {
    type: GET_CARD_ITEMS
  };
};

const addCard = (product) => {
  return {
    type: ADD_CARD_ITEM,
    payload: product,
  }
}


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
      }
    default:
      return state;
  }
}

// cardReducer
const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case GET_CARD_ITEMS:
      return {
        ...state,
      };
    case ADD_CARD_ITEM:
      return {
        cards: [...state.cards, action.payload],
        numberofCards: state.numberofCards + 1,
      }
    default:
      return state;
  }
}



const rootReducer = combineReducers({
  productR: productReducer,
  cardR: cardReducer
}); 


// store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("mobile"));

store.dispatch(getCards());
store.dispatch(addCard("Pen"));


