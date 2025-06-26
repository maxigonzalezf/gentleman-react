import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
    // tambien se puede hacer con el contexto (validar que el usuario este autenticado)
    const token = localStorage.getItem("token")
                        // un Outlet es la ruta que se va a renderizar... replace reemplaza la ruta en su totalidad por "/login" (sin este, haria un append de la ruta donde esta con /login)
    return token ? <Outlet/> : <Navigate to="/login" replace /> // esto redirige a privado, por lo que verifica si tiene token, y si no tiene token, redirige a login
}