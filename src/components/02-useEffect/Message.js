import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords;

    useEffect(() => {

        const mouseMoven = (e) => {
            const coors = {x: e.x, y: e.y};
            setCoords(coors);
            
        }
    
        window.addEventListener('mousemove', mouseMoven);
       
       
        return () => {

            window.addEventListener('mousemove', mouseMoven);
            
        }
    }, [])


    return (
        <div>
            <h3>Eres Genial!!</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
