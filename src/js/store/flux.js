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
			charactersResponseJSON: {},
			planetsResponseJSON: {},
			vehiclesResponseJSON: {},
			favorites: []
		},
		actions: {
			fetchGetCharacters: async () => {
				let json = await getActions().doFetch(SWAPI_ROOT + CHARACTERS_ENDPOINT);

				if (json) {
					getActions().setCharacters(json);
				}
			},

			fetchGetPlanets: async () => {
				let json = await getActions().doFetch(SWAPI_ROOT + PLANETS_ENDPOINT);

				if (json) {
					getActions().setPlanets(json);
				}
			},
			fetchGetVehicles: async () => {
				let json = await getActions().doFetch(SWAPI_ROOT + VEHICLES_ENDPOINT);

				if (json) {
					getActions().setVehicles(json);
				}
			},
			setCharacters: json => {
				setStore({ charactersResponseJSON: json });
			},
			setPlanets: json => {
				setStore({ planetsResponseJSON: json });
			},
			setVehicles: json => {
				setStore({ vehiclesResponseJSON: json });
			},
			doFetch: endpoint => {
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
						return response.json();
					})
					.catch(error => {
						throw Error(error);
						return null;
					});
			},
			getCharacterByName: name => {
				let store = getStore();

				if (store.charactersResponseJSON) {
					return store.charactersResponseJSON.results.find(character => {
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

				if (store.planetsResponseJSON) {
					return store.planetsResponseJSON.results.find(planet => {
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
				if (store.vehiclesResponseJSON) {
					return store.vehiclesResponseJSON.results.find(vehicle => {
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
			isFavorite: name => {
				let store = getStore();
				if (store.favorites) {
					return store.favorites.includes(name);
				} else {
					return false;
				}
			},
			addFavorite: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			deleteFavorite: name => {
				let store = getStore();
				let index = store.favorites.indexOf(name);

				const arr = store.favorites.filter(function(item) {
					return item !== name;
				});
				setStore({ favorites: arr });
			}
		}
	};
};

export default getState;
