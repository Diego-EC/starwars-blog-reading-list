import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ButtonSeeDetail = props => {
	ButtonSeeDetail.propTypes = {
		name: PropTypes.string,
		index: PropTypes.number
	};
	const BUTTON_LABEL = "Learn more!";

	return (
		<div>
			<Link to={"/item-detail/" + props.index + props.name}>
				<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
			</Link>
		</div>
	);
};
