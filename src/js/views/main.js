import React, { useState, useEffect } from "react";
import { HorizontalScrollingItemList } from "../component/horizontal-scrolling-item-list";

import { Card } from "../component/bootstrap/card";

export const Main = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	const SWAPI_ROOT = "https://swapi.dev/api/";
	const CHARACTERS_ENDPOINT = "people/";

	useEffect(() => {
		fetchGetCharacters();
	}, []);

	function doFetch(endpoint, method) {
		console.log("doFetch");

		let fetchOptions = {
			method: method,
			headers: { "Content-Type": "application/json" }
		};

		return fetch(endpoint, fetchOptions)
			.then(response => {
				if (response.ok) {
					console.log("  fetchRead OK");
					return response.json();
				} else {
					console.log("  fetchRead ERR");
					throw Error(response.statusText);
				}
				console.log(response);
				return response.json();
			})
			.catch(error => {
				console.log(error);
				alert("oh oh, problema gordo.");
				return null;
			});
	}

	async function fetchGetCharacters() {
		console.log("fetchGetCharacters");
		let json = await doFetch(SWAPI_ROOT + CHARACTERS_ENDPOINT, "GET");
		if (json) {
			console.log("json OK");
			let jsonMap = json.results.map(function(character, index) {
				let info = { name: character.name };
				let details = [
					"Gender: " + character.gender,
					"Hair Color: " + character.hair_color,
					"Eye Color: " + character.eye_color
				];
				return <Card key={index} name={info.name} details={details} />;
			});
			console.log(jsonMap);
			setCharacters(jsonMap);
		}
	}

	console.log("-->lol");
	return (
		<div className="container">
			<h1>Main view</h1>
			<HorizontalScrollingItemList resource={"Characters"} items={characters} />
			<HorizontalScrollingItemList resource={"Planets"} items={planets} />
			<HorizontalScrollingItemList resource={"Vehicles"} items={vehicles} />
		</div>
	);
};
