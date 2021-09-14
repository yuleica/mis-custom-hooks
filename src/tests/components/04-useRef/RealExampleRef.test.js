import React from 'react';
import { shallow } from 'enzyme';
import {RealExampleRef } from '../../../../src/components/04-useRef/RealExampleRef';


//lo defino aquí porque no lo voy a cambiar dentro
//del test

const wrapper = shallow(<RealExampleRef />);

test('should show correctly', () => {
    
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
})

test('should show MultipleCustomHooks ', () => {
    
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
})
