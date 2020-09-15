import React from "react";

export const MyContext = React.createContext(null);

export class ContextWrapper extends React.Component {
	//https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
	static get propTypes() {
		return {
			children: PropTypes.any
		};
	}

	constructor() {
		super();
		this.state = {
			store: {
				todos: ["Make the bed", "Take out the trash"]
			},
			actions: {
				addTask: title => this.setState({ todos: this.state.todos.concat(title) })
			}
		};
	}
	render() {
		return <MyContext.Provider value={this.state}>{this.props.children}</MyContext.Provider>;
	}
}
