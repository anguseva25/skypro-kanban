import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {paths} from "./routesPath";
import PrivateRoute from "./components/PrivateRoute";
import {useState} from "react";
import {NotFoundPage} from "./pages/unfoundPage/NotFoundPage";
import {PopBrowsePage} from "./pages/Popups/PopBrowse/PopBrowsePage";
import {PopExitPage} from "./pages/Popups/PopExit/PopExitPage";

function getLocalStorage(){
    let user = ''
    try {
       user = JSON.parse(localStorage.getItem('user'));
       return user
    }

    catch (err) {
        return ''
    }
}

export const AppRoutes = ({darkTheme, setDarkTheme}) => {
    const [isAuth, setIsAuth] = useState(getLocalStorage()); {/*поменять на false после API*/}

    return (<Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path={paths.MAIN} element={<MainPage isAuth={isAuth} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}>
                    <Route path={paths.EXIT} element={<PopExitPage/>}/>
                    <Route path={paths.CARD_ID} element={<PopBrowsePage/>}/>
                </Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOTFOUND} element={<NotFoundPage />}/>
        </Routes>
    )
}
