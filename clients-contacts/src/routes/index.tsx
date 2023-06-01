import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import RegisterPage  from "../pages/Register"
import ProtectedRoutes from "../components/ProtectedRoutes"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/" element={<ProtectedRoutes/>}>
                <Route
                index
                path="/dashboard"
                element={<Dashboard/>}
                />
            </Route>
        </Routes>
    )
}