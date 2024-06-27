import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {paths} from "./routesPath";
import PrivateRoute from "./components/PrivateRoute";
import {NotFoundPage} from "./pages/unfoundPage/NotFoundPage";
import {PopBrowsePage} from "./pages/Popups/PopBrowse/PopBrowsePage";
import {PopExitPage} from "./pages/Popups/PopExit/PopExitPage";
import PopNewCard from "./components/popNewCard/popNewCard.jsx";

export const AppRoutes = ({darkTheme, setDarkTheme}) => {


    return (<Routes>
            <Route element={<PrivateRoute/>}>
                <Route path={paths.MAIN} element={<MainPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}>
                    <Route path={paths.EXIT} element={<PopExitPage/>}/>
                    <Route path={paths.CARD_ID} element={<PopBrowsePage/>}/>
                    <Route path={paths.NEW_CARD} element={<PopNewCard/>}/>
                </Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOTFOUND} element={<NotFoundPage />}/>
        </Routes>
    )
}
