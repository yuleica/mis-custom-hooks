import React, {useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {
    //con parse, retorno de string a vector.. 
    //y si no hay nada em memoria, retorno un arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || [];

}
export const TodoApp = () => {

    // el [] corresponde al initialState
    const [todos, dispatch] = useReducer(todoReducer, [], init); 


    //cada vez que el todos cambie, se guarda en localStorage
    //se pasa a json porque localstorage guarda strings, no objetos...
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);

        //crear la acción
         const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action);

    }

    const handleToggle = (todoId) => {
        //otra forma de hacer el llamado al reducer
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        //const action = {
        //    type: 'add',
        //    payload: newTodo
        //};

        //dispatch(action);

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList
                        todos = {todos}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle} />

                </div>


                <div className="col-5">

                    <TodoAdd
                        handleAddTodo = {handleAddTodo} />

                </div>
            </div>
           
        </div>
    )
}
