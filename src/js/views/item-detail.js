import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";

export const ItemDetail = () => {
	const { store, actions } = useContext(Context);
	let { index, name } = useParams();
	let intemDetail;
	console.log("-> name = " + name);
	console.log("-> index = " + index);

	useEffect(() => {
		cargarDetalles();
	}, []);

	async function cargarDetalles() {
		intemDetail = actions.getCharacterFromArray(index);
		console.log("intemDetail");
		console.log(intemDetail);
	}

	//console.log(intemDetail);

	return (
		<div className="container">
			<div className="row">
				<img src={starWars800x600} className="col-6" alt="star wars image" />
				<h1 className="col-6">ItemDetail view {name}</h1>
				<p />
			</div>
			<div>detail</div>
		</div>
	);
};
