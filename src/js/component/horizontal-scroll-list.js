import React from "react";
import PropTypes from "prop-types";

export const HorizontalScrollList = props => {
	HorizontalScrollList.propTypes = {
		listName: PropTypes.string,
		items: PropTypes.array
	};

	return (
		<div className="container-fluid mb-3">
			<h3 className="text-danger mb-2">{props.listName}</h3>
			<div className="overflow-auto row flex-nowrap">{props.items}</div>
		</div>
	);
};
