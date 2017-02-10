import React from "react";
import {Link} from "react-router";
export default class Layout extends React.Component {
	navigate() {
		console.log(this.props);
		this.props.router.push(	"/");
	}
	render() {
		return (
			<div>
				<h1>KillerNews.net</h1>
				{this.props.children}
				<Link to="archive" class="btn btn-success"	>archive</Link>
				<Link to="setting"><button class="btn btn-success">setting</button></Link>
				<button onClick={this.navigate.bind(this)}>Feature</button>
			</div>
		);
	}
}