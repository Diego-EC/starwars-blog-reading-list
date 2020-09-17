import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "./horizontal-scroll-list";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		charactersProcess();
	}, []);

	async function charactersProcess() {
		await getCharacters();
		const charactersMap = mapCharacters();
		setCharacters(charactersMap);
	}

	async function getCharacters() {
		await actions.fetchGetCharacters();
	}

	function mapCharacters() {
		let jsonMap = [];
		if (store.characters.results) {
			jsonMap = store.characters.results.map(function(character, index) {
				let details = ["Population: " + character.name, "Terrain: " + character.name];

				return {
					name: character.name,
					details: details
				};
			});
		}
		return jsonMap;
	}

	return <HorizontalScrollList listName={"Characters"} items={characters} />;
};
