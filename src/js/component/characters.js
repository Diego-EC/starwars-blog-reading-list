import React, { useState, useEffect, useContext } from "react";
import { HorizontalScrollList } from "./horizontal-scroll-list";
import { Context } from "../store/appContext";
import { Favorites } from "./favorites";

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
		if (store.charactersResponseJSON.results) {
			jsonMap = store.charactersResponseJSON.results.map(function(character, index) {
				let details = [
					"Gender: " + character.gender,
					"Hair Color: " + character.hair_color,
					"Eye Color: " + character.eye_color
				];
				return {
					name: character.name,
					details: details,
					isFavorite: false
				};
			});
		}
		return jsonMap;
	}

	return <HorizontalScrollList listName={"Characters"} items={characters} link={"character"} />;
};
