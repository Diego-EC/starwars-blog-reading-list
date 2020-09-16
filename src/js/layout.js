import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Main } from "./views/main";

import { Character } from "./views/Character";
import { Vehicle } from "./views/Vehicle";
import { Planet } from "./views/Planet";

import { Container } from "./views/Container";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Main} />

					<Route exact path="/:type/:name" component={Container} />

					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
