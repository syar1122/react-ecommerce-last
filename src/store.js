import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import themeReducer from "./features/themeSlice";
import { appApiSlice } from "../src/services/app.api";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    // theme: themeReducer,
    cart: cartSlice,
    user: userSlice,
    [appApiSlice.reducerPath]: appApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApiSlice.middleware),
});

setupListeners(store.dispatch);
