import { useEffect, useState } from "react"

export const PromiseError = () => {
    const [data, setData] = useState<string | null>(null)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                throw new Error("La promesa tiro error")
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                    throw err
                }
            }
        }
        
        fetchData()
    }, [])

    if (error) {
        throw error
    }

    return <div>{data}</div>
}