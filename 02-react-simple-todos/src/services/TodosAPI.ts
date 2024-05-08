/**
 * Service for communicating with the json-server backend
 */
import axios from "axios";
import { NewTodo, Todo } from "../types/Todo";

const BASE_URL = "http://localhost:3000";

/**
 * Get all todos
 */
export const getTodos = async () => {
	const res = await axios.get<Todo[]>(BASE_URL + "/todos");
	return res.data;
}

/**
 * Get all todos using Fetch
 *
 * @deprecated
 */
export const getTodosUsingFetch = async () => {
	const res = await fetch(BASE_URL + "/todos");
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);
	}
	const data: Todo[] = await res.json();
	return data;
}

/**
 * Create a new todo
 *
 * @param data Object with properties and values for the new todo
 */
export const createTodo = async (todo: NewTodo) => {
	const res = await axios.post<Todo>(BASE_URL + "/todos", todo);
	return res.data;
}

/**
 * Create a new todo using Fetch
 */
export const createTodoUsingFetch = async (todo: NewTodo) => {
	const res = await fetch(BASE_URL + "/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);
	}
	const data: Todo = await res.json();
	return data;
}

/**
 * Update a todo
 *
 * @param todo_id Todo to update
 * @param data Data to update todo with
 */

/**
 * Delete a todo
 *
 * @param todo_id Todo to delete
 */
