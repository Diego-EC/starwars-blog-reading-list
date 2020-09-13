import React from "react";
import PropTypes from "prop-types";

export const HorizontalScrollingItemList = props => {
	HorizontalScrollingItemList.propTypes = {
		resource: PropTypes.string,
		items: PropTypes.array
	};

	//const [items, setItems] = useState([]);
	console.log("--> HorizontalScrollingItemList");
	return (
		<div className="container-fluid">
			<h2>{props.resource}</h2>
			<div className="overflow-auto row flex-nowrap">{props.items}</div>
		</div>
	);
};
