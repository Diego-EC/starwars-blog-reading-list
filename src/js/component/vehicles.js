import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "./horizontal-scroll-list";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		planetsProcess();
	}, []);

	async function planetsProcess() {
		await getVehicles();
		localStorage.setItem("vehicles", JSON.stringify(store.vehiclesResponseJSON));
		const vehiclesMap = mapVehicles();
		setVehicles(vehiclesMap);
	}

	async function getVehicles() {
		await actions.fetchGetVehicles();
	}

	function mapVehicles() {
		let jsonMap = [];
		if (store.vehiclesResponseJSON.results) {
			jsonMap = store.vehiclesResponseJSON.results.map(function(vehicle, index) {
				let details = ["Manufacturer: " + vehicle.manufacturer, "Model: " + vehicle.model];
				return {
					name: vehicle.name,
					details: details
				};
			});
		}
		return jsonMap;
	}

	return <HorizontalScrollList listName={"Vehicles"} items={vehicles} link={"vehicle"} />;
};
