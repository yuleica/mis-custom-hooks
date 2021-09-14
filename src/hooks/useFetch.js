import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null });
    
    //mantiene la referencia del elemento setstate para evitar errores
    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])



    useEffect( () => {

        setstate({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json() )
            .then(data => {

                if (isMounted.current) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })

    },[url])
    
    
    return (state);
}