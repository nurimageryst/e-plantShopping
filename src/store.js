import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'
// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

export default store; // Export the store for use in the app (e.g., <Provider store={store}>)