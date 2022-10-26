const redux = require("redux");
const reduxLogger = require("redux-logger").createLogger();

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const produce = require("immer").produce;

const initialState = {
  name: "lakshmi",
  address: {
    state: "karnataka",
    city: "bangalore",
    street: "7th main",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxLogger));

console.log("initial state", store.getState());

store.dispatch(updateStreet("7th main 13th cross"));
