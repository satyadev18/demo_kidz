import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUserApi } from "../../services";

const initialState = {
  hasUserCreated: false,
};
export const addUserMiddleware = createAsyncThunk(
  "user/addUser",
  async (payload) => {
    const response = await addUserApi(payload);

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state, action) => {
      state.hasUserCreated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserMiddleware.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) state.hasUserCreated = true;
    });
  },
});

// export actions
export const { resetUser } = userSlice.actions;

// export store values
export const getUserFetchStatus = (state) => state.userSlice.hasUserCreated;

//export user slice
export default userSlice.reducer;
