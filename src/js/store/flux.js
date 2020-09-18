import React, { useState, useEffect } from "react";

import { Card } from "../component/bootstrap/card";
import { Vehicle } from "../views/vehicle";

const getState = ({ getStore, getActions, setStore }) => {
	const SWAPI_ROOT = "https://swapi.dev/api/";
	const CHARACTERS_ENDPOINT = "people/";
	const PLANETS_ENDPOINT = "planets/";
	const VEHICLES_ENDPOINT = "vehicles/";

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

				let json = await getActions().doFetch(SWAPI_ROOT + CHARACTERS_ENDPOINT);

				console.log(json);
				if (json) {
					setStore({ characters: json });
				}
			},

			fetchGetPlanets: async () => {
				console.log("fetchGetPlanets");

				let json = await getActions().doFetch(SWAPI_ROOT + PLANETS_ENDPOINT);

				console.log(json);
				if (json) {
					setStore({ planets: json });
					//setStore({ planets: json.results });
				}
			},
			fetchGetVehicles: async () => {
				console.log("fetchGetVehicles");

				let json = await getActions().doFetch(SWAPI_ROOT + VEHICLES_ENDPOINT);

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
			getCharacterByName: name => {
				let store = getStore();
				console.log(store);
				if (store.characters) {
					return store.characters.results.find(character => {
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
			getPlanetByName: name => {
				let store = getStore();
				console.log(store);
				if (store.planets) {
					return store.planets.results.find(planet => {
						if (planet.name === name) {
							return true;
						} else {
							return false;
						}
					});
				} else {
					throw Error("Planet Not Found");
				}
			},
			getVehicleByName: name => {
				let store = getStore();
				console.log(store);
				if (store.vehicles) {
					return store.vehicles.results.find(vehicle => {
						if (vehicle.name === name) {
							return true;
						} else {
							return false;
						}
					});
				} else {
					throw Error("Vehicle Not Found");
				}
			},

			addFavorite: () => {},
			deleteFavorite: () => {}
		}
	};
};

export default getState;
