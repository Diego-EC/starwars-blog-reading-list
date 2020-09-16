import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetail } from "../component/item-detail";

export const Container = () => {
	let { type, name } = useParams();

	const [object, setObject] = useState({});
	const { actions } = useContext(Context);

	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Hair Color",
				value: object.hair_color
			}
		];
	}

	useEffect(() => {
		let object = null;
		switch (type) {
			case "character":
				object = actions.getCharacterWithName(name);
				break;
		}

		if (object) {
			setObject(object);
		} else {
			//TODO
			alert("Error desconocido");
		}
	}, []);

	const itemDetails = parseDetailsToItemDetails(object);
	if (Object.values(object).length === 0) {
		return <h1>Not found</h1>;
	}
	return <ItemDetail details={itemDetails} title={object.name} description={""} />;
};
