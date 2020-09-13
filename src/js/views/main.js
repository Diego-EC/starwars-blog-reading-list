import React, { useState, useEffect } from "react";
import { HorizontalScrollingItemList } from "../component/horizontal-scrolling-item-list";

import { Card } from "../component/bootstrap/card";

export const Main = () => {
	const [items, setItems] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetchRead();
	}, []);

	function doFetch() {}

	function fetchRead() {
		console.log("fetchRead");
		fetch("https://swapi.dev/api/people/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) {
					console.log("  fetchRead OK");
				} else {
					console.log("  fetchRead ERR");
					throw Error(response.statusText);
				}
				console.log(response);
				return response.json();
			})
			.then(json => {
				//here is were your code should start after the fetch finishes
				console.log(json); //this will print on the console the exact object received from the server
				let jsonMap = json.results.map(function(character, index) {
					let info = { name: character.name };
					//return info;
					return <Card key={index} name={info.name} />;
				});
				console.log(jsonMap);
				setItems(jsonMap);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}
	// <div>{jsonMap}</div>
	// 			<div>{items}</div>
	console.log("-->lol");
	return (
		<div className="">
			<h1>Main view</h1>

			<HorizontalScrollingItemList resource={"Characters"} items={items} />

			<HorizontalScrollingItemList resource={"Planets"} items={planets} />

			<HorizontalScrollingItemList resource={"Vehicles"} items={vehicles} />
		</div>
	);
};
