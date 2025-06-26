import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Login } from "./public/Login/Login"
import { PrivateGuard } from "./guard/PrivateGuard"
//import { AdminGuard } from "./guard/AdminGuard"
import { PrivateRouter } from "./private/PrivateRouter"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound"

export const AppRouter = () => {
    return (
        // declaramos un provider donde estableceremos rutas que van a ir a una app web
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={ <Navigate to={"/login"} />} /> {/* carga la app y redirige al login */}
                <Route path="/login" element={ <Login /> } />
                {/*<Route path="/private" element={<Dashboard />} /> // esta mal, es totalmente publico */}
                <Route element={<PrivateGuard />}> {/* todas las rutas que esten aqui adentro seran controladas por el PrivateGuard */}
                    {/*<Route element={<AdminGuard />}> {/* controla si es admin */}
                    {/*</Route>*/}
                    <Route path="/private/*" element={<PrivateRouter />} />
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}