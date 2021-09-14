import {todoReducer} from '../../../components/08-useReducer/todoReducer';

//inicializo variable
import {demoTodos} from '../../fixtures/demoTodos';


test('should return by default state', () => {
    
    const state = todoReducer(demoTodos, {});
    
    expect(state).toEqual(demoTodos);
})

test('should return a new state and a new todo', () => {
    //preparo el ambiente de prueba
    const newTodo = {
        id: 3,
        desc: 'Aprender Express',
        done: false
    };

    const action = {
        type: 'add',
        payload: newTodo
    };


    const state = todoReducer(demoTodos, action);
    
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
})

test('should delete a todo', () => {
    //preparo el ambiente de prueba
    const action = {
        type: 'delete',
        payload: 1 //id del todo a borrar
    };


    const state = todoReducer(demoTodos, action);
    
    expect(state.length).toBe(1);
    expect(state).toEqual([ demoTodos[1] ]);//evalúo un objeto
})

test('should toggle a on a todo', () => {
    //preparo el ambiente de prueba
    const action = {
        type: 'toggle',
        payload: 1
    };


    const state = todoReducer(demoTodos, action);
    
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);//evalúo un array
})