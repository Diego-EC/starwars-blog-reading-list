import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Favorite = props => {
	Favorite.propTypes = {
		name: PropTypes.string
	};
	const { store, actions } = useContext(Context);

	function deleteFavorite() {
		actions.deleteFavorite(props.name);
	}

	return (
		<div className="container">
			<div className="row border-bottom border-primary">
				<span className="col-8 text-primary">{props.name}</span>
				<button className="col-4 dropdown-item" type="button" onClick={deleteFavorite}>
					<i className="far fa-trash-alt" />
				</button>
			</div>
		</div>
	);
};
