import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props)
        this.state = {hasError: false}
    }

    // metodo propio de los componentes de react, que da el estado si hay un error
    static getDerivatedStateFromError(_: Error): ErrorBoundaryState {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log('Error: ', error)
        console.log('Error Info: ', errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <h1>Algo salio mal...</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary;

