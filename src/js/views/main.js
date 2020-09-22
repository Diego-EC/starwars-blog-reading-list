import React from "react";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Main = () => {
	return (
		<div className="container">
			<Characters />
			<Planets />
			<Vehicles />
		</div>
	);
};
