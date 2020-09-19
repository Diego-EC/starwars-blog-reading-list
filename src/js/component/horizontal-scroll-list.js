import React from "react";
import PropTypes from "prop-types";
import { Card } from "../component/bootstrap/card";

export const HorizontalScrollList = props => {
	HorizontalScrollList.propTypes = {
		listName: PropTypes.string,
		items: PropTypes.array,
		link: PropTypes.string
	};

	const detailsHtml = props.items.map((item, index) => {
		return (
			<Card key={index} name={item.name} details={item.details} link={props.link} isFavorite={item.isFavorite} />
		);
	});

	return (
		<div className="container-fluid mb-3">
			<h3 className="text-danger mb-2">{props.listName}</h3>
			<div className="overflow-auto row flex-nowrap">{detailsHtml}</div>
		</div>
	);
};
