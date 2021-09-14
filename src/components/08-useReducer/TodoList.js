import React from 'react';
import { TodoListItem } from './TodoListItem';


export const TodoList = ({todos, handleDelete, handleToggle, index}) => {
    return (

        <ul className="list-group list-groupflush">
            { todos.map( (todo, i) => (
                
                <TodoListItem 
                    key={todo.id}
                    todo = {todo}
                    index = {i}
                    handleDelete = {handleDelete}
                    handleToggle = {handleToggle}
                />

            ))}
        </ul>

    )
}

