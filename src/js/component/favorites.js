import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "./favorite";

export const Favorites = () => {
	const [label, setLabel] = useState("far fa-heart");
	const { store, actions } = useContext(Context);

	let mapFavorites = store.favorites.map((name, index) => {
		return <Favorite key={index} name={name} />;
	});

	return (
		<div className="btn-group">
			<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
			</button>
			<div className="dropdown-menu dropdown-menu-right">{mapFavorites}</div>
		</div>
	);
};
