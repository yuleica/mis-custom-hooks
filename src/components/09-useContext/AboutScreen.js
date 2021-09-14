import React, { useContext } from 'react';
import { UserContext } from './UserComponent';

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext)

    const handleClick = () => {
        //objeto vacío para limpiar la info
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />  

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-warning"
                onClick={handleClick}
            >
                Logout
            </button>
        </div>
    )
}
