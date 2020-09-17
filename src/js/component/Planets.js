import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "../component/horizontal-scroll-list";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	const [planets, setPlanets] = useState([]);

	const SWAPI_ROOT = "https://swapi.dev/api/";
	const PLANETS_ENDPOINT = "planets/";

	useEffect(() => {
		init();
	}, []);

	async function init() {
		let planets = await getPlanets(setPlanets);

		console.log("PLANETS");
		console.log("PLANETS");
		console.log("PLANETS");
		console.log(planets);

		setPlanets(planets);
	}

	async function getPlanets(callback) {
		await actions.fetchGetPlanets(SWAPI_ROOT + PLANETS_ENDPOINT);
		console.log(store.planets.results);
		let jsonMap = [];
		if (store.planets.results) {
			jsonMap = store.planets.results.map(function(planet, index) {
				//let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];
				//return <Card key={index} name={planet.name} details={details} />;
				/*let details = [
					{ label: "Population: ", value: planet.population },
					{ label: "Terrain: ", value: planet.terrain }
                ];*/
				//return details;

				let name = planet.name;
				let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];
				//return [name, details];

				return {
					name: name,
					details: details
				};
			});
		}
		console.log(jsonMap);
		return jsonMap;
	}

	console.log("-------------------------");
	console.log("-------------------------");
	console.log("-------------------------");
	console.log(planets);
	return <HorizontalScrollList listName={"Planets"} items={planets} />;
};
