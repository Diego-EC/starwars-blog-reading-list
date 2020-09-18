import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Main = () => {
	const { store, actions } = useContext(Context);

	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	return (
		<div className="container">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	);
};
