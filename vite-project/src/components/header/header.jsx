import PopUser from "../popUser/PopUser.jsx";
import {useState} from "react";
import * as S from "./Header.styled.js"
import {Container} from "../shared.styled.js";

const Header = ({setDarkTheme, darkTheme, addNewCard}) => {
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
                        Создать новую задачу</button>
                    <S.HeaderUser className="_hover02" onClick={manualOpen}>Ivan Ivanov</S.HeaderUser>
                    {isOpen && (<PopUser setDarkTheme={setDarkTheme} darkTheme={darkTheme} />)}
                </S.HeaderNav>
            </S.HeaderBlock>
        </Container>
    </S.Header>)
};

export default Header;