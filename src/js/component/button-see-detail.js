import React from "react";
import { Link } from "react-router-dom";

export const ButtonSeeDetail = props => {
	const BUTTON_LABEL = "Learn more!";

	/**
     * 			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
            </Link>
            
            <button onClick={() => this.props.history.push("/CharacterDetail/1")}>{BUTTON_LABEL}</button>
     */
	return (
		<Link to="/CharacterDetail/1">
			<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
		</Link>
	);
};
