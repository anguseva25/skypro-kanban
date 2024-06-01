import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import {paths} from "./routesPath.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import {useState} from "react";
import {NotFoundPage} from "./pages/unfoundPage/NotFoundPage.jsx";

export const AppRoutes = (darkTheme, setDarkTheme) => {
    const [isAuth, setIsAuth] = useState(true); {/*поменять на false после API*/}

    return (<Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path={paths.MAIN} element={<MainPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}></Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOTFOUND} element={<NotFoundPage />}/>
        </Routes>
    )
}