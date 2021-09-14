import React from 'react';
import { mount } from 'enzyme';
import {LoginScreen} from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserComponent';


const setUser = jest.fn();

const wrapper = mount(
    <UserContext.Provider value={{
        setUser

    }}>
        < LoginScreen />
    </UserContext.Provider>);


test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should run setUser with an argument.', () => {
    
    //simulo un click
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
        id: 123,
        name: 'Yule',

    });
         
 
});

