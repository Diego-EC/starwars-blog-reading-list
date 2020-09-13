import React from "react";
import PropTypes from "prop-types";

import "../../../styles/index.scss";

export const Card = props => {
	Card.propTypes = {
		name: PropTypes.string
	};

	return (
		<div className="col-3">
			<div className="card card-block">
				<p>card {props.name}</p>
			</div>
		</div>
	);
};
