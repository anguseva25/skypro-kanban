import './App.css'
import PopExit from "./components/popExit/popExit.jsx";
import PopNewCard from "./components/popNewCard/popNewCard.jsx";
import PopBrowse from "./components/popBrowse/popBrowse.jsx";
import Header from "./components/header/header.jsx";
import Main from "./components/Main/Main.jsx";
import {cardList} from "./data.js";
import {useState} from "react";
import {GlobalStyle, Wrapper} from "./global.styled.js";
import {ThemeProvider} from "styled-components";
import * as Themes from "./themeStyle.styled.js";


function App() {
    const [cards, setCards] = useState(cardList);
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={darkTheme ? Themes.darkTheme : Themes.lightTheme}>
            <GlobalStyle/>
            <Wrapper>
                <PopExit/>
                <PopNewCard/>
                <PopBrowse/>
                <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} setCards={setCards} cards={cards}/>
                <Main cardList={cards}/>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App
