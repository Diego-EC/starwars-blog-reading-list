import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetails } from "../component/item-details";
import { ifArrayExistsAndHasData } from "../common/common.js";

export const Vehicle = () => {
	const [vehicle, setVehicle] = useState({});
	const { store, actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		name = decodeURIComponent(name);
		checkIfWeHaveData();
		getVehicleByName(name);
	}, []);

	function checkIfWeHaveData() {
		if (ifArrayExistsAndHasData(store.vehiclesResponseJSON)) {
			let storedVehicles = JSON.parse(localStorage.getItem("vehicles"));
			actions.setVehicles(storedVehicles);
		}
	}

	function getVehicleByName(name) {
		let vehicle = actions.getVehicleByName(name);
		if (vehicle) {
			setVehicle(vehicle);
		} else {
			alert("Vehicle not found");
			throw Error("Vehicle not found");
		}
	}

	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Manufacturer",
				value: object.manufacturer
			},
			{
				label: "Model",
				value: object.model
			},
			{
				label: "Cargo Capacity",
				value: object.cargo_capacity
			},
			{
				label: "Consumables",
				value: object.consumables
			},
			{
				label: "Crew",
				value: object.crew
			},
			{
				label: "Passengers",
				value: object.passengers
			}
		];
	}

	const itemDetails = parseDetailsToItemDetails(vehicle);
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu mollis erat." +
		" Duis sed justo orci. Mauris a lacus vel erat congue aliquam. " +
		" Fusce sit amet pellentesque enim, nec interdum diam. Phasellus consequat dolor magna." +
		" Nam malesuada felis ac lectus volutpat varius. Suspendisse quis quam semper," +
		" hendrerit mauris nec, eleifend.";

	return <ItemDetails title={vehicle.name} description={description} details={itemDetails} />;
};
