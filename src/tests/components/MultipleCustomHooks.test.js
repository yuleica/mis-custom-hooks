import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

//import {useCounter} from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


jest.mock('../../hooks/useFetch');
//jest.mock('../../hooks/useCounter');


test('should show correctly', () => {

//    useCounter.mockReturnValue({
//        counter: 1,
//        increment: () => {
//            return counter+1;
//        }
//    });
    
    useFetch.mockReturnValue({
        data: null,
        loading: true,
        error: null
    });

//debo pasar 1 como argumento en increment.. favor revisar las otras pruebas que hagan algo similar
 //   useCounter.mockReturnValue({
 //       counter: 1,
 //       increment()
//
//    });
        
    
    const wrapper = shallow(<MultipleCustomHooks />);

    expect (wrapper).toMatchSnapshot();
})



test('should show info', () => {

    useFetch.mockReturnValue({
        data: [{
            author: 'x en la vida',
            quote: 'hola mundo'

        }], 
        loading: false,
        error: null
    });


    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('hola mundo');
    expect(wrapper.find('footer').text().trim()).toBe('x en la vida');
   
    console.log(wrapper.html())


})