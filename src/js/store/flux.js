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
					setStore({ characters: json });
				}
			},

			fetchGetPlanets: async endpoint => {
				console.log("fetchGetPlanets");

				let json = await getActions().doFetch(endpoint);

				console.log(json);
				if (json) {
					setStore({ planets: json });
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

			getCharacterFromArray: index => {
				return getStore().characters.results[index];
			},
			getPlanetFromArray: index => {
				return getStore().planet.results[index];
			}
		}
	};
};

export default getState;
