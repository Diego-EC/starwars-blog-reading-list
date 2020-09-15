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
					setStore({ characters: json });
				}
			},

			getCharacterFromArray: index => {
				return getStore().characters.results[index];
			}
		}
	};
};

export default getState;
