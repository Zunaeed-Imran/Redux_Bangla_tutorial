// in this file we will lrean about Reducer.

// ## 3. reducer

// reducer is a pure function.
// we will create reducer for counter.

const INCREMENT = 'Increment';

const DECREMENT = 'Decrement';

const initialCounterSTate = {
  count: 0,
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
