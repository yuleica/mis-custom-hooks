import React from 'react';
import {shallow} from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

const handleAddTodo = jest.fn();


const wrapper = shallow(
    <TodoAdd
        handleAddTodo = {handleAddTodo}    
    
    />);
test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('shouldnt call handleTodo', () => {

    //simulo un click
    const formSubmit = wrapper.find('form').prop('onSubmit');
    console.log(formSubmit);

    //llamo a una función y le paso los parámetros correspondientes
    formSubmit({preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
 });

 test('should call handleAddTodo', () => {
    //valor inicial 
    const value = 'Aprender React';

    //simulo el cambio
    wrapper.find('input').simulate('change', {
        target: {
            value,
            name: 'description'
        }
    });

    //simulo un click
    const formSubmit = wrapper.find('form').prop('onSubmit');

    //llamo a una función y le paso los parámetros correspondientes
    formSubmit({preventDefault(){} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );
    expect(handleAddTodo).toHaveBeenCalledWith({
        id: expect.any(Number),
        desc: value,
        done: false
    });

    expect(wrapper.find('input').prop('value') ).toBe('');


 })
 