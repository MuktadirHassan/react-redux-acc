import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export default configureStore({
  reducer: {
    // ... your reducer here

    counter: counterReducer,
  },
});
