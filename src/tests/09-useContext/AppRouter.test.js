import React from 'react';
import {mount} from 'enzyme';
import {AppRouter} from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserComponent';


const user = {
    id: 1,
    name: 'x en la vida'
}

const wrapper = mount ( 
    <UserContext.Provider value={{user}}>
        <AppRouter />)

    </UserContext.Provider>);

        
test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


