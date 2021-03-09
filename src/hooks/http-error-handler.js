import { useState, useEffect } from 'react'

const HttpErrorHandler = httpClient => {
    const [error, setError] = useState(null)
        
    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null)        
        return req
    })

    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        setError(err)       
    })

    const { request, response } = httpClient.interceptors

    useEffect(() => {
        return () => {
            request.eject(reqInterceptor)
            response.eject(resInterceptor)
        }
    }, [reqInterceptor, resInterceptor, request, response])

    const errorConfirmedHandler = () => {
        setError(null)
    }
    
    return [error, errorConfirmedHandler]
}

export default HttpErrorHandler