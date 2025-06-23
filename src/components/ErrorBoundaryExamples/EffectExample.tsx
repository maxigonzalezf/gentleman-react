import { useEffect } from "react"

export const EffectExample = () => {
    useEffect(() => {
        throw new Error("ups")
    }, [])

    return <div></div>
}