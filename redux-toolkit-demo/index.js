const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");

console.log("Initial state", store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("updated state", store.getState());
// });

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
store.dispatch(fetchUsers());

// unsubscribe();
