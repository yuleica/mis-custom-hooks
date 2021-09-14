import React, {useState} from 'react';
import './counter.css';


export const CounterApp = () => {
    //objeto compuesto x 2 elementos..
    const [{counter1,counter2}, setCounter] = useState({
        counter1: 10,
        counter2: 20
    });

console.log(setCounter);


    return (
        <>

            {/*<h1>Counter {counter}</h1>*/}
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <hr></hr>

            <button 
                className="btn btn-primary"
                onClick={() => {
                    setCounter({
                        counter1: counter1 + 1,
                        counter2: 20});
                }}>+1</button>
        </>
    )
}
