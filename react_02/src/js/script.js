import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Archive from "./pages/Archive";
import Feature from "./pages/Feature";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(<Router history={hashHistory}>
	 <Route path="/" component={Layout}>
	 	<IndexRoute component={Feature}></IndexRoute>
	 	<Route path="archive" component={Archive}></Route>
	 	<Route path="setting" component={Settings}></Route>
 	 </Route>
	</Router>, app);	
