import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Todo from "./pages/Todo";
import Favorities from "./pages/Favorities";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={Layout}>
		<IndexRoute component={Todo} ></IndexRoute>
		<Route path="favorities" component={Favorities}></Route>
		<Route path="settings" component={Settings}></Route>
	</Route>

	</Router>,app);
