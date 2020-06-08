import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./page/Jobs";
import Login from "./page/login";
import Detail from "./page/detail";

function App() {
	let [user, setUser] = useState({ isAuthenticated: true }); // if user is true then login, false, not login

	const ProtectedRoute = (props) => {
		if (user.isAuthenticated === true) {
			return <Route {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	};
	return (
		<div>
			<Switch>
				<ProtectedRoute
					path="/job/:id"
					render={(props) => <Detail {...props} />}
				/>

				<Route path="/jobs" component={Jobs} />
				<Route path="/login" component={Login} />
				<Route path="/" component={Jobs} />
			</Switch>
		</div>
	);
}

export default App;
