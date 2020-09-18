import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ButtonSeePlanetDetail(props) {
	ButtonSeeDetail.propTypes = {
		name: PropTypes.string,
		index: PropTypes.number,
		item: PropTypes.string
	};
	const BUTTON_LABEL = "Learn more!";

	return (
		<div>
			<Link to={"/planet/" + props.name}>
				<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
			</Link>
		</div>
	);
}
