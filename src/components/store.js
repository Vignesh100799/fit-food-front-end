import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers/root";
import persistStore from "redux-persist/es/persistStore";



const store = configureStore({
    reducer : root,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const persistor = persistStore(store);

export { store, persistor };