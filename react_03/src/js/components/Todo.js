import React from "react";

export default class TodoItem extends React.Component {
	render() {
		const {text} = this.props
		return (
			<li>
				<p>{text}</p>
			</li>
		);
	}
}