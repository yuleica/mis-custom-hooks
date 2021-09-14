import React from 'react';
import {mount} from 'enzyme';
import {HomeScreen} from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserComponent';

const user = {
    name: 'x',
    email: 'x@x.com'
}

const wrapper = mount(
    <UserContext.Provider value={{
        user

    }}>
        < HomeScreen />
    </UserContext.Provider>);
    

test('should show correctly', () => {
    
    expect(wrapper).toMatchSnapshot();

})

