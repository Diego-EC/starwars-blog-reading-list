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
				console.log("fetchGetCharacters");

				let json = await getActions().doFetch(endpoint);

				console.log(json);
				if (json) {
					setStore({ characters: json.results });
				}
			},

			fetchGetPlanets: async endpoint => {
				console.log("fetchGetPlanets");

				let json = await getActions().doFetch(endpoint);

				console.log(json);
				if (json) {
					setStore({ planets: json });
					//setStore({ planets: json.results });
				}
			},
			fetchGetVehicles: async endpoint => {
				console.log("fetchGetVehicles");

				let json = await getActions().doFetch(endpoint);

				console.log(json);
				if (json) {
					setStore({ vehicles: json });
				}
			},
			doFetch: endpoint => {
				console.log("doFetch");

				let fetchOptions = {
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
						throw Error(error);
						return null;
					});
			},
			getCharacterWithName: name => {
				let store = getStore();
				console.log(store);
				if (store.characters) {
					return store.characters.find(character => {
						if (character.name === name) {
							return true;
						} else {
							return false;
						}
					});
				} else {
					throw Error("Character Not Found");
				}
			},
			getCharacterFromArray: index => {
				return getStore().characters.results[index];
			},
			getPlanetFromArray: index => {
				return getStore().planets.results[index];
			},
			getVehicleFromArray: index => {
				return getStore().vehicles.results[index];
			},

			addFavorite: () => {},
			deleteFavorite: () => {}
		}
	};
};

export default getState;
