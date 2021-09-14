import React from 'react';

import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

test('should show Hola Mundo', () => {

    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
    
})
