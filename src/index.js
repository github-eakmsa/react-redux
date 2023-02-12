import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// for redux 
import { allReducers } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const appStore = createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);