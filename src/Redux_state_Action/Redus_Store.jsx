// in this file we will learn about redux store.


// function for store create. 
const {createStore} = require("redux")


const INCREMENT = 'Increment';

const DECREMENT = 'Decrement';

const initialCounterSTate = {
  count: 0,
};

// action - object - type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count +1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    
    default:
      state;
  }
};


// create store 
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})


// dispatch ation

store.dispatch(incrementCounter())
