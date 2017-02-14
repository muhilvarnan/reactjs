import React from "react";

import TodoItem from "../components/Todo"
export default class Todo extends React.Component {

	constructor() {
		super();
		this.state = {
			todos: [
				{
					id:1,
					text:"Go Shopping",
					complete: false
				},
				{
					id:2,
					text:"Go Swimming",
					complete: false
				}
			]
		}
	}

	render() {
		const {todos} = this.state;
		const TodoComponents = todos.map((todo) => {
			return <TodoItem key={todo.id} {...todo} />
		});
		return (
			<div>
			  <h1>Todo</h1>
			  <ul>{TodoComponents}</ul>
			</div>
		);
	}
}