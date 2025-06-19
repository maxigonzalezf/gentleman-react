import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context"
import "./Modal.scss"


interface Props {
    children: React.ReactNode
}

const eventListener = "keydown";

export const Modal = ({children}: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const { state, setState } = useModalContext(); //useState(false)
    const closeModal = () => { setState(false) }
    
    const modalRoot = document.getElementById("modal")

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation() // el click no se propaga hacia arriba (no llega al overlay), por lo tanto no se cierra
    }
    
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setState(false)
            }
        }
        if (state) {
            document.addEventListener(eventListener, handleEsc)
        }

        return () => {
            document.addEventListener(eventListener, handleEsc)
        }
    }, [setState, state])

    if (!state || !modalRoot) {
        return null;
    }

    return createPortal(
    <div className="overlay" onClick={closeModal}>
        <div className="modal" onClick={handleContentClick} ref={modalRef}>
            {children}
            <button className="close-button" onClick={closeModal}>Close</button>
        </div>
    </div>, modalRoot)
}