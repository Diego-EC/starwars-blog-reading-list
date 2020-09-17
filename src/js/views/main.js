import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "../component/horizontal-scroll-list";
import { Context } from "../store/appContext";
import { Card } from "../component/bootstrap/card";
import { Planets } from "../component/Planets";

export const Main = () => {
	const { store, actions } = useContext(Context);

	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const SWAPI_ROOT = "https://swapi.dev/api/";
	const CHARACTERS_ENDPOINT = "people/";
	const PLANETS_ENDPOINT = "planets/";
	const VEHICLES_ENDPOINT = "vehicles/";

	useEffect(() => {
		getAndSetCharacters();
		getAndSetPlanets();
		getAndSetVehicles();
	}, []);

	async function getAndSetCharacters() {
		await actions.fetchGetCharacters(SWAPI_ROOT + CHARACTERS_ENDPOINT);

		if (store.characters) {
			let jsonMap = store.characters.map(function(character, index) {
				let details = [
					"Gender: " + character.gender,
					"Hair Color: " + character.hair_color,
					"Eye Color: " + character.eye_color
				];
				return <Card key={index} index={index} name={character.name} details={details} />;
			});
			setCharacters(jsonMap);
		}
	}

	async function getAndSetPlanets() {
		console.log("getPlanets");
		await actions.fetchGetPlanets(SWAPI_ROOT + PLANETS_ENDPOINT);

		if (store.planets.results) {
			let jsonMap = store.planets.results.map(function(planet, index) {
				let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];
				return <Card key={index} name={planet.name} details={details} />;
			});
			setPlanets(jsonMap);
		}
	}

	async function getAndSetVehicles() {
		console.log("getVehicles");
		await actions.fetchGetVehicles(SWAPI_ROOT + VEHICLES_ENDPOINT);

		if (store.vehicles.results) {
			let jsonMap = store.vehicles.results.map(function(vehicle, index) {
				let details = ["Manufacturer: " + vehicle.manufacturer, "Model: " + vehicle.model];
				return <Card key={index} name={vehicle.name} details={details} />;
			});
			setVehicles(jsonMap);
		}
	}

	return (
		<div className="container">
			{/*<HorizontalScrollList listName={"Characters"} items={characters} />*/}
			<Planets />
			{/*<HorizontalScrollList listName={"Vehicles"} items={vehicles} />*/}
		</div>
	);
};
