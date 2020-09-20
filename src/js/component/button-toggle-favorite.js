import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ButtonToggleFavorite = props => {
	ButtonToggleFavorite.propTypes = {
		itemName: PropTypes.string
	};
	const LABEL_FAVORITE_YES = "fas fa-heart";
	const LABEL_FAVORITE_NOT = "far fa-heart";

	const { store, actions } = useContext(Context);

	//let cucu = toggleFavorite();
	function toggleFavorite() {
		let isFavorite = actions.isFavorite(props.itemName);
		console.log("toggleFavorite");
		console.log(isFavorite);
		if (isFavorite === true) {
			console.log("delete favotire");
			actions.deleteFavorite(props.itemName);
			console.log(store.favorites);
			console.log(store.favorites.length);
		} else {
			console.log("add favotire");
			actions.addFavorite(props.itemName);
			console.log(store.favorites);
		}
	}

	let label = setLabel();
	function setLabel() {
		let isFavorite = actions.isFavorite(props.itemName);
		if (isFavorite === true) {
			return LABEL_FAVORITE_YES;
		} else {
			return LABEL_FAVORITE_NOT;
		}
	}

	return (
		<button className="btn btn-outline-warning" onClick={toggleFavorite}>
			<i className={label} />
		</button>
	);
};
