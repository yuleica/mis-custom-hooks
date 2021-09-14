import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

//return [values, handleInputChange, reset];
const initialForm = {
    name: 'Yule',
    email: 'y@y.com'
}

test('should return values for deffect', () => {

    const {result} = renderHook( () => useForm(initialForm));
    //desestructuro un vector, porque se retorna un vector
    const [formValues, handleInputChange, reset] = result.current;

    console.log(result);

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
})    


test('should change the value of name', () => {

    const {result} = renderHook( () => useForm(initialForm));
    //dejo un espacio para indicar que solo trabajaré con el 2 elemento
    //recuerda que es un vector, y se está desestructurando... 
    const [ , handleInputChange] = result.current;

    console.log(result);

    act( () => {

        handleInputChange({
            target: {
                name: 'name',
                value: 'Melissa'
            }
        });
        
    });

    const [formValues] = result.current;
    expect (formValues).toEqual({...initialForm, name: 'Melissa'});
});

test('should reset a form ', () => {

    const {result} = renderHook( () => useForm(initialForm));
    //dejo un espacio para indicar que solo trabajaré con el 2 elemento
    //recuerda que es un vector, y se está desestructurando... 
    const [ , handleInputChange, reset] = result.current;


    act( () => {

        handleInputChange({
            target: {
                name: 'name',
                value: 'Melissa'
            }
        });

        reset();
        
    });

    const [formValues] = result.current;
    expect (formValues).toEqual(initialForm);
});


