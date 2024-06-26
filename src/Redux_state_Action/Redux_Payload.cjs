// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux');

// import { createStore } from 'redux';

// CONSTANTS
const ADD_USER = 'ADD_USER';

const initialState = {
  users: ['imran'],
  count: 1,
};

const addUser = user => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// ### CREATING REDUCER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

// ### Store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser('Munnu'));
