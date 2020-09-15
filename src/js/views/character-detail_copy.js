import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const CharacterDetail = props => {
	CharacterDetail.propTypes = {
		match: PropTypes.object
	};
	let { id, name } = useParams();
	console.log(useParams());
	console.log(id);
	console.log(name);
	return (
		<div className="">
			<h1>CharacterDetail view {id}</h1>
		</div>
	);
};
