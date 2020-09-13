import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import ScrollToTop from "./component/_scrollToTop";

//import { Home } from "./views/_home";
//import { Demo } from "./views/_demo";
//import { Single } from "./views/_single";
import { Main } from "./views/main";
import { VehicleDetail } from "./views/vehicle-detail";
import { PlanetDetail } from "./views/planet-detail";
import { CharacterDetail } from "./views/character-detail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/CharacterDetail/:id">
						<CharacterDetail />
					</Route>
					<Route exact path="/PlanetDetail/:id">
						<PlanetDetail />
					</Route>
					<Route exact path="/VehicleDetail/:id">
						<VehicleDetail />
					</Route>
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
