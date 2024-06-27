import {createContext, useState} from "react";
import {paths} from "../routesPath.js";
import {useNavigate} from "react-router-dom";

export const UserContext = createContext(undefined)

function getLocalStorage(){
    try {
        return JSON.parse(localStorage.getItem('user'));
    }
    catch (err) {
        return null
    }
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(getLocalStorage());
    const navigate = useNavigate();

    const loginUser = (res) => {
        setUser(res.user);
        localStorage.setItem('user', JSON.stringify(res.user));
        navigate(paths.MAIN)
    }

    const logoutUser = () => {
        setUser(null)
        navigate(paths.LOGIN);
        localStorage.removeItem('user');
    }

    return <UserContext.Provider value={{user, loginUser, logoutUser}}>{children}</UserContext.Provider>
}