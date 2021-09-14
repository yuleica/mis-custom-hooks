import React from 'react';
import {shallow} from 'enzyme';
import {TodoListItem} from '../../../components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos';


//establezco mi ambiente inicial de prueba  
const handleDelete = jest.fn();
const handleToggle = jest.fn();

  
const wrapper = shallow (
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />)

test('should show correctly', () => {
  expect(wrapper).toMatchSnapshot();
  
});

test('should handleToggle be called', () => {
   
    //esta función se activa cuando se cliquea el párrafo
    wrapper.find('p').simulate('click');
   
   
    expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id );
    
  });


  test('should handleDelete be called', () => {
   
    wrapper.find('button').simulate('click');
   
   
    expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
    
  });


test('debe mostrar el texto correctamente', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1.${demoTodos[0].desc}`);
});

test('debe de tener la clase complete si el TODO.done=true', () => {
    
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow (
        <TodoListItem
          todo={ todo }
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);


   
});

