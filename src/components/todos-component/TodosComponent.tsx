import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModels.ts";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([])
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    },[])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};