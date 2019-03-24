import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./reducers";
import functions from "./utils/functions";

import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/css/nucleo-icons.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "react-notification-alert/dist/animate.css";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise, thunk)(createStore)(reducers, devTools);
const hist = createBrowserHistory();

const authenticate = props => {
  const userLocalStorage = functions.loadLocalStorage("user_bot");
  const { path } = props.match;

  if (!userLocalStorage && path !== "/auth")
    return <Redirect from={props.location.pathname} to="/auth/login" />;

  if (path === "/auth") functions.removeLocalStorageItem("user_bot");

  switch (path) {
    case "/auth":
      return <AuthLayout {...props} />;
    case "/admin":
      return <AdminLayout {...props} />;
    default:
      return <AuthLayout {...props} />;
  }
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/auth" render={props => authenticate(props)} />
        <Route path="/admin" render={props => authenticate(props)} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
