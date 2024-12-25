import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Definisi action
const addToCart = createAction("ADD_TO_CART");

// Definisi reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // Tambahkan payload ke state array
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => { 
    state.status = true
  })
})

// Konfigurasi store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store : ", store.getState());

// Langganan perubahan store
store.subscribe(() => {
  console.log("STORAGE CHANGE:", store.getState());
});

// Dispatch action
store.dispatch(addToCart({ id: 1, quantity: 10 }));
store.dispatch(addToCart({ id: 2, quantity: 20 }));
store.dispatch(login())
