import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "../component/horizontal-scroll-list";
import { Context } from "../store/appContext";
import { Card } from "../component/bootstrap/card";

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
		setPlanets(planets);
	}

	async function getPlanets(callback) {
		await actions.fetchGetPlanets(SWAPI_ROOT + PLANETS_ENDPOINT);
		console.log(store.planets.results);
		let jsonMap = [];
		if (store.planets.results) {
			jsonMap = store.planets.results.map(function(planet, index) {
				let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];
				return <Card key={index} name={planet.name} details={details} />;
			});
		}
		console.log(jsonMap);
		return jsonMap;
	}

	return <HorizontalScrollList listName={"Planets"} items={planets} />;
};
