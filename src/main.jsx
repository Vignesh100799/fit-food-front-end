import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./components/store.js";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

// store.dispatch(fetchMeal())
// axios.defaults.baseURL = "https://fit-food.onrender.com"
axios.defaults.baseURL = '/api';
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <App />
    </PersistGate>
  </Provider>
);
