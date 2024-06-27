import { Navigate, Outlet } from 'react-router-dom';
import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";


function PrivateRoute() {
    const {user} = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
