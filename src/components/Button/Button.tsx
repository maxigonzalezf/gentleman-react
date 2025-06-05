import "./Button.css"

interface Props {
    label: string,
    parentMethod: () => void
}

                        // desestructuracion (javascript)
export const Button = ({label, parentMethod}: Props) => {

    return (                                       // trabaja por referencia al espacio de memoria donde se encuentra el metodo. Llama a un metodo que ya existe, por eso no ejecuta con () -> en ese caso crearia el metodo cada vez que haces click (afecta a la memoria)
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
    )
} // esto es un componente tonto, porque no tiene estado