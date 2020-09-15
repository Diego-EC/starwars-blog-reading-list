import React, { useState, useEffect } from "react";

import { Card } from "../component/bootstrap/card";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			fetchGetCharacters: async endpoint => {
				console.log("doFetch");

				let fetchOptions = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				let json = await fetch(endpoint, fetchOptions)
					.then(response => {
						console.log("1");
						if (response.ok) {
							console.log("2");
							return response.json();
						} else {
							console.log("3");
							throw Error(response.statusText);
						}
						console.log(response);
						return response.json();
					})
					.catch(error => {
						console.log("4");
						alert("oh oh, problema gordo.");
						throw Error(error);
						return null;
					});
				console.log(json);
				if (json) {
					let jsonMap = json.results.map(function(character, index) {
						let details = [
							"Gender: " + character.gender,
							"Hair Color: " + character.hair_color,
							"Eye Color: " + character.eye_color
						];
						return <Card key={index} index={index} name={character.name} details={details} />;
					});
					//setCharacters(jsonMap);
					setStore({ characters: jsonMap });
				}
				//setStore({ characters: jsonMap });
				const store = getStore();
				console.log(store.characters);
			},

			getCharacterFromArray: index => {
				return getStore().characters[index];
			}
		}
	};
};

export default getState;
