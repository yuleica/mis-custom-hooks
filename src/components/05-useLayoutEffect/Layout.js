import React, {useRef, useState, useLayoutEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import './layout.css';


export const Layout = () => {
   
    const {counter, increment } = useCounter();

    const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);


    const {quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect() );
    }, [quote])


   return(
       <div>
           <h1>Layout Effect</h1>
           <hr />

           
            <blockquote className="blockquote">
                <p 
                    className="mb-0"
                    ref={pTag}
                >{quote}</p>
                
            </blockquote>

            <pre> {JSON.stringify(boxSize, null, 3) }</pre>

            <button className="btn btn-primary"
                    onClick={() => increment(1)}>
                    Siguiente quote
            </button>


       </div>
   )

}
