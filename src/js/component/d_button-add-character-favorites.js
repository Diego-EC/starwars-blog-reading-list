import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ButtonAddFavorite } from "../button-add-favorite";

export const ButtonAddCharacterFavorites = props => {
	ButtonAddCharacterFavorites.propTypes = {
		//itemType: PropTypes.string,
		itemName: PropTypes.string,
		isFavorite: PropTypes.bool
	};

	const [label, setLabel] = useState("far fa-heart");
	const { store, actions } = useContext(Context);

	function onClick() {
		actions.addCharacterFavorite(props.itemName);
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
		<ButtonAddFavorite>
			onClick={() => {
				onClick();
			}}>
			<i className={label} />
		</ButtonAddFavorite>
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
