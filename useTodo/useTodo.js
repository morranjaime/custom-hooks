import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos') ? localStorage.getItem('todos') : []);
}

export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action =
        {
            type: "addTodo",
            payload: todo
        };

        dispatchTodo(action);
    }

    const handleDeleteTodo = (todo) => {
        const action =
        {
            type: "deleteTodo",
            payload: todo
        };

        dispatchTodo(action);
    }

    const handleToogleTodo = (todo) => {
        const action =
        {
            type: "toogleTodo",
            payload: todo
        };

        dispatchTodo(action);
    }
    return {
        ...todos,
        todos,
        handleDeleteTodo,
        handleToogleTodo,
        handleNewTodo,
        allTodos: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length
    }
}