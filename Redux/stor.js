import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { reducer } from "./ReducersCombine";
// Redux Presist
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['cart'],
  // only the cart state values will be persisted, while the other state value will  not be persisted.
  // blacklist: ['cart'],
  // all state values except for the cart state value will be persisted.
};
const persistedReducer = persistReducer(persistConfig, reducer);
// config the store
const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export let persistStoree = persistStore(store);
// Purge the persisted state
// persistStoree.purge();
// export default the store
export default store;
