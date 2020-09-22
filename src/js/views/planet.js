import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetails } from "../component/item-details";
import { ifArrayExistsAndHasData } from "../common/common.js";

export const Planet = () => {
	const [planet, setPlanet] = useState({});
	const { store, actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		name = decodeURIComponent(name);
		checkIfWeHaveData();
		getPlanetByName(name);
	}, []);

	function checkIfWeHaveData() {
		if (ifArrayExistsAndHasData(store.planetsResponseJSON)) {
			let storedPlanets = JSON.parse(localStorage.getItem("planets"));
			actions.setPlanets(storedPlanets);
		}
	}

	function getPlanetByName(name) {
		let planet = actions.getPlanetByName(name);
		if (planet) {
			setPlanet(planet);
		} else {
			alert("Planet not found");
			throw Error("Planet not found");
		}
	}
	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Population",
				value: object.population
			},
			{
				label: "Terrain",
				value: object.terrain
			},
			{
				label: "Climate",
				value: object.climate
			},
			{
				label: "Diameter",
				value: object.diameter
			},
			{
				label: "Gravity",
				value: object.gravity
			},
			{
				label: "Rotation Period",
				value: object.rotation_period
			}
		];
	}

	const itemDetails = parseDetailsToItemDetails(planet);
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu mollis erat." +
		" Duis sed justo orci. Mauris a lacus vel erat congue aliquam. " +
		" Fusce sit amet pellentesque enim, nec interdum diam. Phasellus consequat dolor magna." +
		" Nam malesuada felis ac lectus volutpat varius. Suspendisse quis quam semper," +
		" hendrerit mauris nec, eleifend.";

	return <ItemDetails title={planet.name} description={description} details={itemDetails} />;
};
