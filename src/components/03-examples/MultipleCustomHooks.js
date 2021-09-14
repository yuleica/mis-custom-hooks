import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


export const MultipleCustomHooks = () => {
   
    const {counter, increment } = useCounter();

    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

//equivale a un if. !!data=false
//si existe la data produce la carga la posicion 0 de la data
//si no existe, no evalúa y ambas variables son undefined 
    const {author, quote} = !!data && data[0];


   return(
       <div>
           <h1>Breaking Bad Quotes</h1>
           <hr />

           {
               loading
               ?
               (
                    <div className="alert alert-info text-center">
                    loading...
                    </div>
               )
               :
               (
                    <blockquote className="blockquote">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer text-right">{author}</footer>
                    </blockquote>
               )
           }

            <button className="btn btn-primary"
                    onClick={() => increment(1)}>
                    Siguiente quote
            </button>


       </div>
   )

}
