import PopUser from "../popUser/PopUser";
import {useState} from "react";
import * as S from "./Header.styled"
import {Container} from "../shared.styled";


const Header = ({setDarkTheme, darkTheme, user}) => {
    const [isOpen, setOpen] = useState(false);

    const manualOpen = () => {
        setOpen((prev) => !prev);
    };

    const [inputValue, setInputValue] = useState({
        date: '',
        topic: '',
        title: '',
        description: '',
        status: '',
    });
    const onChangeValue = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value}); {/*берется name который перед placeholder*/}
    }

    const onAddNewCard = () => {
        // const addNewCard = () => {
        //     const newCard = {
        //         title: "my Test",
        //         topic: "Research",
        //         date: "12.05.2024",
        //         status: "Без статуса",
        //         description: 'шота-шота'
        // }
            addNewCard({token: user.token, newTask: inputValue}).then((res) => {
                console.log(res);
            })
                .catch((err) => {
                    console.log(err);
                })
            {/*const newCardList = [...cards, newCard];
            setCards(newCardList);*/}
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
                        <button className="header__btn-main-new _hover01" onClick={onAddNewCard}>
                            <a href="#popNewCard">Создать новую задачу</a>
                        </button>
                        <S.HeaderUser className="_hover02" onClick={manualOpen}>{user.name}</S.HeaderUser>
                        {isOpen && (<PopUser user={user} setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>)}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>)
};

export default Header;
