import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "./favorite";

export const Favorites = () => {
	console.log("Favorites");

	const [label, setLabel] = useState("far fa-heart");
	const { store, actions } = useContext(Context);

	let mapFavorites = store.favorites.map((name, index) => {
		return (
			/*
			<li className="list-unstyled" key={index}>
				{favorite}
            </li>
            */
			<Favorite key={index} name={name} />
		);
	});
	/*
    
	function toggleFavorite() {
		let isFavorite = actions.isFavorite(props.itemName);
		if (isFavorite === true) {
			actions.deleteFavorite(props.itemName);
			setLabel(LABEL_FAVORITE_NOT);
		} else {
			actions.addFavorite(props.itemName);
			setLabel(LABEL_FAVORITE_YES);
		}
	}
*/
	return (
		<div className="btn-group">
			<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
			</button>
			<div className="dropdown-menu dropdown-menu-right">{mapFavorites}</div>
		</div>
	);
};

/*
				<button className="dropdown-item" type="button">
					Action
				</button>
				<button className="dropdown-item" type="button">
					Another action
				</button>
				<button className="dropdown-item" type="button">
					Something else here
                </button>
                */
