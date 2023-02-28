import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async ( url ) => {
        const api = await fetch( url )
        const data = await api.json()

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
