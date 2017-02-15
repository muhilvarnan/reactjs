import React from "react";

import TodoItem from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";
export default class Todo extends React.Component {

	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos:TodoStore.getAll()
		}
	}

	componentWillMount() {
		TodoStore.on("change", this.getTodos);
	}

	componentWillUnMount(){
		TodoStore.removeListener("change", this.getTodos);
	}

	getTodos() {
		this.setState({
				todos: TodoStore.getAll()
		});
	}

	createTodo() {
		TodoActions.createTodo(Date.now());
	}
	render() {
		const {todos} = this.state;
		const TodoComponents = todos.map((todo) => {
			return <TodoItem key={todo.id} {...todo} />
		});
		return (
			<div>
				<button onClick={this.createTodo.bind(this)}>Create</button>
				<input />
			  	<h1>Todo</h1>
			  	<ul>{TodoComponents}</ul>
			</div>
		);
	}
}