import {useEffect, useState} from "react";
import {cardList} from "../../data";
import {Wrapper} from "../../global.styled";
import PopNewCard from "../../components/popNewCard/popNewCard";
import Header from "../../components/header/header";
import Main from "../../components/Main/Main";
import {Outlet} from "react-router-dom";
import {getCards} from "../../API/cardsAPI.js";


export const MainPage = ({darkTheme, setDarkTheme, isAuth}) => {
    const [isLoading, setLoading] = useState(true);
    const [errorMesg, setErrorMesg] = useState(false);
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
        setLoading(true)

        getCards(isAuth.token).then((res) => {
            setErrorMesg('')
            setCards(res.tasks);
        }).catch((err) => {
            setErrorMesg(err.message)
        }).finally(() => {
            setLoading(false);
        })
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        <Wrapper>
            <PopNewCard/>
            {/*<PopBrowse/>*/}
            <Header isAuth={isAuth} setDarkTheme={setDarkTheme} darkTheme={darkTheme} setCards={setCards} addNewCard={addNewCard}/>
            <Main errorMesg={errorMesg} isLoading={isLoading} cardList={cards}/>
            <Outlet/>
        </Wrapper>)
}
