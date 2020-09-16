import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";

export const ItemDetail = props => {
	const { details, title, description } = props;

	const detailsHtml = details.map((detail, index) => {
		return (
			<div key={index} className="col-2">
				<p>{detail.label}</p>
				<p>{detail.value}</p>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="d-flex flex-row text-center">
				<img src={starWars800x600} className="col-6" alt="star wars image" />
				<div className="col-6">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>

			<hr className="bg-danger border border-danger" />

			<div className="d-flex flex-row text-center text-danger">{detailsHtml}</div>
		</div>
	);
};
ItemDetail.propTypes = {
	details: PropTypes.array,
	title: PropTypes.string,
	description: PropTypes.string
};
