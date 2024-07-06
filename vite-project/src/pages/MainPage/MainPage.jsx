import {useContext, useEffect, useState} from "react";
import {Wrapper} from "../../styled files/global.styled.js";
import Header from "../../components/header/header";
import Main from "../../components/main/Main";
import {Outlet} from "react-router-dom";
import {getCards} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";
import {CardContext} from "../../context/cardContext.jsx";


export const MainPage = ({darkTheme, setDarkTheme}) => {
    const [isLoading, setLoading] = useState(true);
    const [errorMesg, setErrorMesg] = useState(false);
    const {cards, setCards} = useContext(CardContext);
    const {user} = useContext(UserContext)

    useEffect(() => {
        setLoading(true)

        getCards(user.token).then((res) => {
            setErrorMesg('')
            setCards(res.tasks);
        }).catch((err) => {
            setErrorMesg(err.message)
        }).finally(() => {
            setLoading(false);
        })
        {/*setTimeout(() => {
            setLoading(false)
        }, 2000)*/}
    }, []);

    return (
        <Wrapper>
            {/*<PopBrowse/>*/}
            <Header user={user} setDarkTheme={setDarkTheme} darkTheme={darkTheme} setCards={setCards}/>
            <Main errorMesg={errorMesg} isLoading={isLoading} cardList={cards}/>
            {/* main({errorMesg: errorMesg, isLoading: isLoading, cardList: cards}) */}
            <Outlet/>
        </Wrapper>)
}
