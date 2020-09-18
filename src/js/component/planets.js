import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "./horizontal-scroll-list";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		planetsProcess();
	}, []);

	async function planetsProcess() {
		await getPlanets();
		const planetsMap = mapPlanets();
		setPlanets(planetsMap);
	}

	async function getPlanets() {
		await actions.fetchGetPlanets();
	}

	function mapPlanets() {
		let jsonMap = [];
		if (store.planets.results) {
			jsonMap = store.planets.results.map(function(planet, index) {
				let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];

				return {
					name: planet.name,
					details: details
				};
			});
		}
		return jsonMap;
	}

	return <HorizontalScrollList listName={"Planets"} items={planets} link={"planet"} />;
};
