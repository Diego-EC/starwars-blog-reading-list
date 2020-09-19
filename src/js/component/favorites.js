import React from "react";

export const Favorites = () => {
	console.log("Favorites");
	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Right-aligned menu
			</button>
			<div className="dropdown-menu dropdown-menu-right">
				<button className="dropdown-item" type="button">
					Action
				</button>
				<button className="dropdown-item" type="button">
					Another action
				</button>
				<button className="dropdown-item" type="button">
					Something else here
				</button>
			</div>
		</div>
	);
};
/*
		<div className="">
			<button className="btn btn-primary">
				Favorites <span className="badge badge-secondary">0</span>
			</button>
        </div>
        */
