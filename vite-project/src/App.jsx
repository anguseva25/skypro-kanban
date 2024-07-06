import './styled files/App.css'
import {useState} from "react";
import {GlobalStyle} from "./styled files/global.styled.js";
import {ThemeProvider} from "styled-components";
import * as Themes from "./styled files/themeStyle.styled.js";
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
