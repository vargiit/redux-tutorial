const { createSlice } = require("@reduxjs/toolkit");
const cakeActions = require("../cake/cakeSlice").cakeActions;

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "Icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
