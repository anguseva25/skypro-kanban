import PopUser from "../popUser/PopUser";
import {useState} from "react";
import * as S from "./Header.styled"
import {Container} from "../shared.styled";


const Header = ({setDarkTheme, darkTheme, addNewCard, isAuth}) => {
    const [isOpen, setOpen] = useState(false);

    const manualOpen = () => {
        setOpen((prev) => !prev);
    };


    return (<S.Header>
        <Container>
            <S.HeaderBlock>
                <S.HeaderLogoLight>
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
                </S.HeaderLogoLight>
                <S.HeaderLogoDark>
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
                </S.HeaderLogoDark>
                <S.HeaderNav>
                    <button className="header__btn-main-new _hover01" onClick={addNewCard}>
                        <a href="#popNewCard">Создать новую задачу</a>
                    </button>
                    <S.HeaderUser className="_hover02" onClick={manualOpen}>{isAuth.name}</S.HeaderUser>
                    {isOpen && (<PopUser isAuth={isAuth} setDarkTheme={setDarkTheme} darkTheme={darkTheme} />)}
                </S.HeaderNav>
            </S.HeaderBlock>
        </Container>
    </S.Header>)
};

export default Header;
