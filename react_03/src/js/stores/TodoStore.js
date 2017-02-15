import { EventEmitter } from "events";

import Dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
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

	creatTodo(text) {
		const id = Date.now();
		this.todos.push(
		{
			id,
			text,
			complete:false
		});
		this.emit("change");
	}	

	getAll() {
		return this.todos;
	}

	handleAction(action) {
		switch(action.type) {
			case "CREATE_TODO": {
				this.creatTodo(action.text);
			}
		}
		console.log("Todo store received an action", action);
	}
}

const todoStore = new TodoStore;

window.todoStore = todoStore

export default todoStore;
Dispatcher.register(todoStore.handleAction.bind(todoStore));
window.Dispatcher = Dispatcher;