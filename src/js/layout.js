import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Main } from "./views/main";

import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { Vehicle } from "./views/vehicle";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Main} />

					<Route exact path="/character/:name" component={Character} />
					<Route exact path="/planet/:name" component={Planet} />
					<Route exact path="/vehicle/:name" component={Vehicle} />

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
