const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const bindActionCreators = redux.bindActionCreators;
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    quantity: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    quantity: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.quantity,
      };
    default:
      return state;
  }
};

const rootreducers = combineReducers({ cakeReducer, iceCreamReducer });
const store = createStore(rootreducers, applyMiddleware(logger));
// console.log("initial state", store.getState());

// const unsubscribe = store.subscribe(() =>);

// store.dispatch(restockCake(10));

const action = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

action.orderIceCream();
