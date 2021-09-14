import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter();


    return (
        <>

            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button onClick={() => increment(2)} className="btn btn-primary">+1</button> 
            <hr />
            <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>    
            <hr />
            <button onClick={reset} className="btn btn-primary">Reset</button>    

        </>
    )
}
