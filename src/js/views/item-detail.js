import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";

export const ItemDetail = () => {
	const [detail, setDetail] = useState({});
	const { store, actions } = useContext(Context);
	let { index, name } = useParams();
	let intemDetail = {};
	console.log("-> name = " + name);
	console.log("-> index = " + index);

	useEffect(() => {
		/*cargarDetalles();*/
		intemDetail = actions.getCharacterFromArray(index);
		console.log("intemDetail");
		console.log(intemDetail);
		setDetail(intemDetail);
		console.log(detail.name);
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
			<hr
				style={{
					color: "#ff0000",
					backgroundColor: "#ff0000",
					height: 0.5,
					borderColor: "#ff0000"
				}}
			/>

			<div className="d-flex flex-row text-center text-danger">
				<div className="col-2">{"Birth year \n" + detail.birth_year}</div>
				<div className="col-2">{detail.eye_color}</div>
				<div className="col-2">{detail.gender}</div>
				<div className="col-2">{detail.hair_color}</div>
				<div className="col-2">{detail.height}</div>
				<div className="col-2">{detail.mass}</div>
			</div>
		</div>
	);
};
/*
<div> </div>
<div> </div>
*/
