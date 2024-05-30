import {useEffect, useState} from "react";
import {cardList} from "../../data.js";
import {Wrapper} from "../../global.styled.js";
import PopExit from "../../components/popExit/popExit.jsx";
import PopNewCard from "../../components/popNewCard/popNewCard.jsx";
import PopBrowse from "../../components/popBrowse/popBrowse.jsx";
import Header from "../../components/header/header.jsx";
import Main from "../../components/Main/Main.jsx";

export const MainPage = ({darkTheme, setDarkTheme}) => {
    const [isLoading, setLoading] = useState(true);
    const [cards, setCards] = useState(cardList);

    const addNewCard = () => {
        const newCard = {
            id: Date.now(),
            title: "my Test",
            topic: "Research",
            date: "12.05.2024",
            status: "Без статуса",
        }
        const newCardList = [...cards, newCard];
        setCards(newCardList);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        <Wrapper>
            <PopExit/>
            <PopNewCard/>
            <PopBrowse/>
            <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} setCards={setCards} addCard={addNewCard} />
            <Main isLoading={isLoading} cardList={cards}/>
        </Wrapper>)
}