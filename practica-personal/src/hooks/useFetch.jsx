import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        const api = await fetch( url )
        console.log(api);
        const data = await api.json()
        console.log(data);

        setEstado({
            data,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
        getFetch()
    }, [url])
    
    return {
        ...estado
    }
}
