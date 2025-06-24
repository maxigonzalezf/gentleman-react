import { useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models";

// mas opciones de uso
type UseApiOptions = {
    // la llamada sera automatica? cuando se cree el componente?
    autoFetch?: boolean;
}

type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch: () => void;
}

export const useApi = <T>(apiCall: UseApiCall<T>, options?: UseApiOptions): UseApiResult<T> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<CustomError>(null)

    // guarda la instancia del metodo cuando suceda algo
    const fetch = useCallback(() => {
        const {call, controller } = apiCall;
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
        if (options && options.autoFetch) {
            return fetch();
        }
    }, [fetch, options])

    return { loading, data, error, fetch }
}