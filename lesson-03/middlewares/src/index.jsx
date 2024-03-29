import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


import App from "./App.jsx";
import rootReducer from "./redux/reducers/rootReducer"

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById("app"));
