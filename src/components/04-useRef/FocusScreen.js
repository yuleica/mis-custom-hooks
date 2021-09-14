import React, { useRef } from 'react';

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').focus();
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="su nombre" />


            <button 
                className="btn btn-outline-primary mt-3"
                onClick={handleClick}
                >Focus</button>

        </div>
    )
}
