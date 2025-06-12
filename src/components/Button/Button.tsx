import { type ReactNode } from "react"
import "./Button.css"
import { useGlobalContext } from "../../context/global.context"

interface Props {
    children: ReactNode, // representa todas las cosas que react puede renderizar
    parentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}

// esto no se debe hacer (crear otro componente en un mismo archivo)
                                        // (elige la prop children)... Tambien podria ser Omit<Props, "parentMethod"> omiti la propiedad "parentMethod"
export const ColorRed = ({ children }: ChildrenProps) => {
    const { value } = useGlobalContext()
    
    return (<div className="color-red">{value}:{children}</div>)
}

                        // desestructuracion (javascript)
export const Button = ({children, parentMethod}: Props) => {
    const { setValue } = useGlobalContext()

    const handleClick = () => {
        setValue(10)
        parentMethod()
    }
    return (                                       // trabaja por referencia al espacio de memoria donde se encuentra el metodo. Llama a un metodo que ya existe, por eso no ejecuta con () -> en ese caso crearia el metodo cada vez que haces click (afecta a la memoria)
        <button className="custom-button" onClick={handleClick}>
            {children}
        </button>
    )
} // esto es un componente tonto, porque no tiene estado