import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

// useFetch es una 'key' que hace referencia a un espacio de memoria que contiene una funcion
export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                
                if (!response.ok) {
                    throw new Error("Error en la peticion")
                }

                const jsonData: T = await response.json();
                setData(jsonData)
            } catch (err){
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();

        return () => {
            controller.abort(); // corta el fetch al que esta asociado
        }

    }, [url])
    
    return { data, loading, error}
}