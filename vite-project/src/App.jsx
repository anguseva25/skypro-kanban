import './App.css'
import {useState} from "react";
import {GlobalStyle} from "./global.styled";
import {ThemeProvider} from "styled-components";
import * as Themes from "./themeStyle.styled";
import {AppRoutes} from "./AppRoutes";


function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={darkTheme ? Themes.darkTheme : Themes.lightTheme}>
            <GlobalStyle/>
            <AppRoutes darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </ThemeProvider>
    );
}

export default App
