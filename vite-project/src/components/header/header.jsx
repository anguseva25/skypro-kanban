import PopUser from "../popUser/PopUser";
import {useState} from "react";
import * as S from "./Header.styled"
import {Container} from "../../styled files/shared.styled.js";
import {paths} from "../../routesPath.js";
import {useNavigate} from "react-router-dom";


const Header = ({setDarkTheme, darkTheme, user}) => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const manualOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleClickNewCard = (event) => {
        //event.preventDefault()

        navigate(paths.NEW_CARD)
    }

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
                        <S.HeaderLinkNewCard className="header__btn-main-new _hover01" onClick={handleClickNewCard}>
                            Создать новую задачу
                        </S.HeaderLinkNewCard>
                        <S.HeaderUser className="_hover02" onClick={manualOpen}>{user.name}</S.HeaderUser>
                        {isOpen && (<PopUser user={user} setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>)}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>)
};

export default Header;
