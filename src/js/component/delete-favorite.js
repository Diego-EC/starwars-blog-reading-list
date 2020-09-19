import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const DeleteFavorite = props => {
	ButtonToggleFavorite.propTypes = {
		itemName: PropTypes.string
	};
	const LABEL_FAVORITE_YES = "fas fa-heart";
	const LABEL_FAVORITE_NOT = "far fa-heart";

	const [label, setLabel] = useState("far fa-heart");
	const { store, actions } = useContext(Context);

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

	return (
		<button className="btn btn-outline-warning" onClick={toggleFavorite}>
			<i className={label} />
		</button>
	);
};
