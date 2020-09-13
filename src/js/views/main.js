import React, { useEffect } from "react";
import { HorizontalScrollList } from "../component/horizontal-scroll-list";

export const Main = () => {
	useEffect(() => {
		fetchRead();
	}, []);

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
				let jsonMap = json.results.map(function(character) {
					let info = { name: character.name };
					return info;
				});
				/*
				var orders = [
					{ name: "chain", description: "necklace chain", status: "shipped" },
					{ name: "pen", description: "ball pen", status: "shipped" },
					{ name: "book", description: "travel diary", status: "delivered" },
					{ name: "brush", description: "paint brush", status: "delivered" }
				];
				orders = json.results;
				console.log(orders);
				var orderInfo = orders.map(function(order) {
					if (order.status === "delivered") {
						var info = {
							orderName: order.name,
							orderDesc: order.description
						};
						return info;
					}
				});
				console.log(orderInfo);
*/
				console.log(jsonMap);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	return (
		<div className="">
			<h1>Main view</h1>

			<HorizontalScrollList />

			<h1>Planets</h1>

			<h1>Vehicles</h1>
		</div>
	);
};
