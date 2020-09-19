import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ButtonAddFavorite = props => {
	ButtonAddFavorite.propTypes = {
		itemType: PropTypes.string,
		itemName: PropTypes.string,
		isFavorite: PropTypes.bool
	};

	const [label, setLabel] = useState("far fa-heart");
	const { store, actions } = useContext(Context);

	function onClick() {
		switch (props.itemType) {
			case "character":
				actions.addCharacterFavorite(props.itemName, props.itemType);
				break;

			default:
				break;
		}

		console.log("favorites");
		console.log(store.favorites);

		let labelText = changeLabel();
		setLabel(labelText);
	}

	function changeLabel() {
		let labelText = "far fa-heart";
		if (label == "far fa-heart") {
			labelText = "fas fa-heart";
		}

		return labelText;
	}

	return (
		<button className="btn btn-outline-warning" onClick={onClick}>
			<i className={label} />
		</button>
	);
};
/*
  <Button 
     onClick={ () => { this.changeText("newtext")}  }> {text} </Button> )...etc
     */

//onClick={() => {}}

/*	return (
		<button className="btn btn-outline-warning">
			<i className="fas fa-heart" />
		</button>
	);*/
