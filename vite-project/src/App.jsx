import './App.css'
import {useState} from "react";
import {GlobalStyle} from "./global.styled.js";
import {ThemeProvider} from "styled-components";
import * as Themes from "./themeStyle.styled.js";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
            <ThemeProvider theme={darkTheme ? Themes.darkTheme : Themes.lightTheme}>
                <GlobalStyle/>
                <Routes>
                    <Route path={'/'} element={<MainPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>} ></Route>
                </Routes>
            </ThemeProvider>
            );
            }

            export default App
