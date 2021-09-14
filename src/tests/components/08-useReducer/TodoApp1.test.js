import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import {demoTodos} from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

const wrapper = shallow( <TodoApp />);

Storage.prototype.setItem = jest.fn(() => {});

test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();

});

test('debe de agregar un  TODO', () => {

    const wrapper = mount( <TodoApp />);

    act( () => {
        //simulo agregar 2 todos 
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect( wrapper.find('h1').text().trim() ).toBe('Todo App (2)');
    expect( localStorage.setItem).toHaveBeenCalledTimes(2);
});

test('should delete a todo', () => {
    act( () => {
        //simulo agregar un todo
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        //simulo borrar un todo
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    });

    expect (wrapper.find('h1').text().trim()).toBe('Todo App (0)');
})

