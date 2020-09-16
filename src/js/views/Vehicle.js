import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";

export const Vehicle = () => {
	const [detail, setDetail] = useState({});
	const { store, actions } = useContext(Context);
	let { index, name } = useParams();

	useEffect(() => {
		setDetail(actions.getCharacterFromArray(index));
	}, []);

	return (
		<div className="container">
			<div className="d-flex flex-row text-center">
				<img src={starWars800x600} className="col-6" alt="star wars image" />
				<div className="col-6">
					<h1>{detail.name}</h1>
					<p>
						{
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu mollis erat. Duis sed justo orci. Mauris a lacus vel erat congue aliquam. Fusce sit amet pellentesque enim, nec interdum diam. Phasellus consequat dolor magna. Nam malesuada felis ac lectus volutpat varius. Suspendisse quis quam semper, hendrerit mauris nec, eleifend."
						}
					</p>
				</div>
			</div>

			<hr className="bg-danger border border-danger" />

			<div className="d-flex flex-row text-center text-danger">
				<div className="col-2">
					<p>Birth Year</p>
					<p>{detail.birth_year}</p>
				</div>
				<div className="col-2">
					<p>Eye Color</p>
					<p>{detail.eye_color}</p>
				</div>
				<div className="col-2">
					<p>Gender</p>
					<p>{detail.gender}</p>
				</div>
				<div className="col-2">
					<p>Hair Color</p>
					<p>{detail.hair_color}</p>
				</div>
				<div className="col-2">
					<p>Height</p>
					<p>{detail.height}</p>
				</div>
				<div className="col-2">
					<p>Mass</p>
					<p>{detail.mass}</p>
				</div>
			</div>
		</div>
	);
};
