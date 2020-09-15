import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollingItemList } from "../component/horizontal-scrolling-item-list";
import { Context } from "../store/appContext";
import { Card } from "../component/bootstrap/card";

export const Main = () => {
	const { store, actions } = useContext(Context);

	//const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const SWAPI_ROOT = "https://swapi.dev/api/";
	const CHARACTERS_ENDPOINT = "people/";
	const PLANETS_ENDPOINT = "planets/";
	const VEHICLES_ENDPOINT = "vehicles/";

	useEffect(() => {
		actions.fetchGetCharacters(SWAPI_ROOT + CHARACTERS_ENDPOINT);
		//fetchGetCharacters();
		//fetchGetPlanets();
		//fetchGetVehicles();
	}, []);

	function doFetch(endpoint, method) {
		console.log("doFetch");

		let fetchOptions = {
			//method: method,
			headers: { "Content-Type": "application/json" }
		};

		return fetch(endpoint, fetchOptions)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw Error(response.statusText);
				}
				console.log(response);
				return response.json();
			})
			.catch(error => {
				console.log(error);
				alert("oh oh, problema gordo.");
				throw Error(error.statusText);
				return null;
			});
	}

	async function fetchGetCharacters() {
		console.log("fetchGetCharacters");
		let json = await doFetch(SWAPI_ROOT + CHARACTERS_ENDPOINT, "GET");
		if (json) {
			let jsonMap = json.results.map(function(character, index) {
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

	async function fetchGetPlanets() {
		console.log("fetchGetPlanets");
		let json = await doFetch(SWAPI_ROOT + PLANETS_ENDPOINT, "GET");
		if (json) {
			let jsonMap = json.results.map(function(planet, index) {
				let details = ["Population: " + planet.population, "Terrain: " + planet.terrain];
				return <Card key={index} name={planet.name} details={details} />;
			});
			setPlanets(jsonMap);
		}
	}

	async function fetchGetVehicles() {
		console.log("fetchGetVehicles");
		let json = await doFetch(SWAPI_ROOT + VEHICLES_ENDPOINT, "GET");
		if (json) {
			let jsonMap = json.results.map(function(vehicle, index) {
				let details = ["Manufacturer: " + vehicle.manufacturer, "Model: " + vehicle.model];
				return <Card key={index} name={vehicle.name} details={details} />;
			});
			setVehicles(jsonMap);
		}
	}

	return (
		<div className="container">
			<h1>Main view</h1>
			<HorizontalScrollingItemList resource={"Characters"} items={store.characters} />
			<HorizontalScrollingItemList resource={"Planets"} items={planets} />
			<HorizontalScrollingItemList resource={"Vehicles"} items={vehicles} />
		</div>
	);
};
