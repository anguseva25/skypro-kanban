import PopUser from "../popUser/PopUser";
import {useState} from "react";
import * as S from "./Header.styled"
import {Container} from "../shared.styled";
import {paths} from "../../routesPath.js";
import {LinkNewCard} from "../popNewCard/PopNewCard.styled.js";
import {addNewCard} from "../../API/cardsAPI.js";


const Header = ({setDarkTheme, darkTheme, user}) => {
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
                        <LinkNewCard to={paths.NEW_CARD} as={'button'} className="header__btn-main-new _hover01" onClick={addNewCard}>
                            <a href="#popNewCard">Создать новую задачу</a>
                        </LinkNewCard>
                        <S.HeaderUser className="_hover02" onClick={manualOpen}>{user.name}</S.HeaderUser>
                        {isOpen && (<PopUser user={user} setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>)}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>)
};

export default Header;
