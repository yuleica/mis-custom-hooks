import { useState } from 'react';

export const useCounter = (initialState = 1) => {

    const [counter, setcounter] = useState(initialState);

   const increment = (factor = 1) => {
       setcounter(counter + factor);
    }


    const decrement = (factor = 1) => {
        setcounter(counter - factor);
    }

    const reset = () => setcounter(initialState);

    return{
        counter,
        increment,
        decrement,
        reset
    };

}
