import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetail } from "../component/item-detail";

export const Character = () => {
	const [character, setCharacter] = useState({});

	const { actions } = useContext(Context);
	let { name } = useParams();

	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Gender",
				value: object.gender
			},
			{
				label: "Hair Color",
				value: object.hair_color
			}
		];
	}

	useEffect(() => {
		let character = actions.getCharacterWithName(name);
		if (character) {
			setCharacter(character);
		} else {
			//TODO
			alert(character);
		}
	}, []);

	const itemDetails = parseDetailsToItemDetails(character);

	return <ItemDetail details={itemDetails} title={character.name} description={""} />;
};
