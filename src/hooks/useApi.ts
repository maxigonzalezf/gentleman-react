import { memo, useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models";

// mas opciones de uso
type UseApiOptions<P> = {
    // la llamada sera automatica? cuando se cree el componente?
    autoFetch?: boolean;
    params: P
}

type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T, P> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch: (param: P) => void;
}

export const useApi = <T, P,> (apiCall: (param: P) => UseApiCall<T>, options?: UseApiOptions<P>): UseApiResult<T, P> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<CustomError>(null)

    // guarda la instancia del metodo cuando suceda algo
    const fetch = useCallback((param: P) => {
        const { call, controller } = apiCall(param);
        // empiezo a hacer la peticion
        setLoading(true);
        // resolvemos la peticion
        call.then((response) => {
            setData(response.data);
            setError(null);
        }).catch((err) => {
            // agarro el error si hay
            setError(err)
        }).finally(() => {
            // termina de cargar
            setLoading(false)
        })
        return () => controller.abort()
    }, [apiCall]) // cuando cambie apiCall, se vuelve a crear el fetch

    // al ser un custom hook, tiene manejo de estado
    useEffect(() => {
        // dependo de la propiedad autoFetch dentro del options
        if (options?.autoFetch) {
            return fetch(options.params);
        }
    }, [fetch, options?.autoFetch, options?.params])

    return { loading, data, error, fetch }
}