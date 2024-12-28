import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    }
  }
})

// Konfigurasi store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("oncreate store : ", store.getState());

// Langganan perubahan store
store.subscribe(() => {
  console.log("STORAGE CHANGE:", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 1, quantity: 10}))
store.dispatch(cartSlice.actions.addToCart({id: 2, quantity: 20}))