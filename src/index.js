import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/component/App'
import reducer from '../src/reducer'
import middleware from '../src/middleware'
import {legacy_createStore as createStore} from 'redux'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


