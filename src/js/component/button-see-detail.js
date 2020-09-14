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

            //<button onClick={() => props.history.push("/CharacterDetail/1")}>Push</button>
     */
	console.log(this);
	return (
		<div>
			<Link to="/character-detail/1/pepe">
				<button className="btn btn-outline-primary">{BUTTON_LABEL}</button>
			</Link>
		</div>
	);
};
