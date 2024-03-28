// in this file we will practice and know about redux state and action.

const { type } = require('os');

// ## Step of how reduc work.
// 1. state
// 2. dispatch action
// 3. reducer
// 4. store

// ## state
const initialCounterSTate = {
  count: 0,
};

const initialuserState = {
  user: [{ name: 'imran' }],
};

// ## action (action is a objact it have a 'type' and 'payload')
// - Increment counter
// - Decrement counter

// we also can define type name (It's a good practice.)
const INCREMENT = 'Increment';
const ADD_USER = 'ADD_USER';

const counterAction = () => {
  return {
    type: INCREMENT,
  };
};

// we can give the daya by 'payload'
const addUser = () => {
  return {
    type: ADD_USER,
    paylod: {name: "Ranas"}
  };
};
