import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars Database</span>
				</Link>
				<div className="ml-auto">
					<Favorites />
				</div>
			</div>
		</nav>
	);
};
