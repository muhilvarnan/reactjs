import React from "react";
import {render} from "react-dom";
import {Router, browserHistory } from "react-router";
import routes from './routes';
import { Provider} from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./rootReducer";
import setAuthorization from "./utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authActions";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

);

if(localStorage.jwtToken){
  setAuthorization(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
