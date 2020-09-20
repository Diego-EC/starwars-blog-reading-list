import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ButtonToggleFavorite = props => {
	ButtonToggleFavorite.propTypes = {
		itemName: PropTypes.string
	};
	const { store, actions } = useContext(Context);
	const LABEL_FAVORITE_YES = "fas fa-heart";
	const LABEL_FAVORITE_NOT = "far fa-heart";

	function toggleFavorite() {
		let isFavorite = actions.isFavorite(props.itemName);
		if (isFavorite === true) {
			actions.deleteFavorite(props.itemName);
		} else {
			actions.addFavorite(props.itemName);
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
