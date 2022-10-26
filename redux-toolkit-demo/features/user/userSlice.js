const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://jsonplacehlder.typicode.com/users");
  const user = response.data.map((user) => user.id);
  return user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      users: [], (state.error = action.error.message);
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
