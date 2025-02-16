import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "../redux/blogSlice";
import { productApi } from "../redux/productApi";


// const person = {
//   name: 'someName'
// };



// const some = {
//   [person.name]: 'ram'
// };

// console.log(some);

export const store = configureStore({
  reducer: {
    [blogSlice.name]: blogSlice.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    productApi.middleware
  ])
});