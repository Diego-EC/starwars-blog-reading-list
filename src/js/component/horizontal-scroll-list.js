import React from "react";
import PropTypes from "prop-types";
import { Card } from "../component/bootstrap/card";

export const HorizontalScrollList = props => {
	HorizontalScrollList.propTypes = {
		listName: PropTypes.string,
		items: PropTypes.array
	};

	console.log("HorizontalScrollList");
	console.log(props.listName);
	console.log(props.items);

	const detailsHtml = props.items.map((item, index) => {
		console.log("----->");
		console.log(index);
		console.log(item.name);
		console.log(item.details);
		console.log(item);
		return <Card key={index} name={item.name} details={item.details} />;
	});

	return (
		<div className="container-fluid mb-3">
			<h3 className="text-danger mb-2">{props.listName}</h3>
			{/*<div className="overflow-auto row flex-nowrap">{props.items}</div>*/}
			<div className="overflow-auto row flex-nowrap">{detailsHtml}</div>
		</div>
	);
};
