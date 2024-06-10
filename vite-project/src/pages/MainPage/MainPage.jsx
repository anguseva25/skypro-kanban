import {useEffect, useState} from "react";
import {cardList} from "../../data";
import {Wrapper} from "../../global.styled";
import PopNewCard from "../../components/popNewCard/popNewCard";
import Header from "../../components/header/header";
import Main from "../../components/Main/Main";
import {Outlet} from "react-router-dom";
import {getCards} from "../../API/cardsAPI.js";


export const MainPage = ({darkTheme, setDarkTheme}) => {
    const [isLoading, setLoading] = useState(true);
    const [cards, setCards] = useState(cardList);

    const addNewCard = () => {
        // const newCard = {
        //     id: Date.now(),
        //     title: "my Test",
        //     topic: "Research",
        //     date: "12.05.2024",
        //     status: "Без статуса",
        // }
        // const newCardList = [...cards, newCard];
        // setCards(newCardList);
    };

    useEffect(() => {
        setLoading(false)
        getCards().then(() => {

        })
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        <Wrapper>
            <PopNewCard/>
            {/*<PopBrowse/>*/}
            <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} setCards={setCards} addNewCard={addNewCard}/>
            <Main isLoading={isLoading} cardList={cards}/>
            <Outlet/>
        </Wrapper>)
}
