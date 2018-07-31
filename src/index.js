import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBlog from "./components/AddBlog.jsx";
import BlogList from "./components/BlogList.jsx";
import ViewBlog from "./components/ViewBlog.jsx";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AddBlog" component={AddBlog} />
        <Route path="/BlogList" component={BlogList} />
        <Route path="/ViewBlog/:id" component={ViewBlog} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
