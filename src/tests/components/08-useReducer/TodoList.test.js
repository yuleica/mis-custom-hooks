import { shallow } from 'enzyme';
import React from 'react';
import {TodoList} from '../../../components/08-useReducer/TodoList';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos';


const handleDelete = jest.fn();
const handleToggle = jest.fn();

const wrapper = shallow(<TodoList
    todos={demoTodos}
    handleDelete= {handleDelete}
    handleToggle= {handleToggle}
    />)

test('should show correctly', () => {
 
    expect(wrapper).toMatchSnapshot();


})

test('should two TodoListItem', () => {
 
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

    expect(wrapper.find(TodoListItem).at(0).prop('handleDelete') ).toEqual(expect.any(Function) );

})


