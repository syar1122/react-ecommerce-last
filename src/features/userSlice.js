import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem("authToken");
let isAuth;
if (token.length > 0) {
  isAuth = true;
} else {
  isAuth = false;
}

const initialState = {
  isAuth: isAuth,
  authToken: token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authToken = action.payload;
      state.isAuth = true;
      localStorage.setItem("authToken", state.authToken);
    },
    logout: (state) => {
      state.authToken = "";
      state.isAuth = false;
      localStorage.setItem("authToken", state.authToken);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
