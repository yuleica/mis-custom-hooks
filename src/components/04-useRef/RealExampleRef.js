
import React, {useState} from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
   
   const [show, setShow] = useState(false);
   
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {/*si show es true, muestra el componente */}
            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-3"
                onClick={ () => {setShow(!show);}}
            >show/hide</button>

        </div>
    )
}
