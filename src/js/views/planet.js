import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetail } from "../component/item-detail";

export const Planet = () => {
	const [planet, setPlanet] = useState({});
	const { store, actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		let planet = actions.getPlanetByName(name);
		if (planet) {
			setPlanet(planet);
		} else {
			//TODO
			alert(planet);
		}
	}, []);

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

	return <ItemDetail title={planet.name} description={description} details={itemDetails} />;
};
