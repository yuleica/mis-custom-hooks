import React, {useMemo, useState} from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow]  = useState(true);

    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary mr-5"
                onClick={() => increment(1)}>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-10"
                onClick={ () => {setShow(!show);}}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
