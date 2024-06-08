import {Wrapper} from "../../global.styled";
import {Link, useNavigate} from "react-router-dom";
import {paths} from "../../routesPath";
import {
    BlockRegistration,
    BtnEnter,
    ContainerSign, Modal,
    ModalBlock,
    ModalFormLogin,
    ModalFormLoginInput, ModalTittle,
} from "./LoginPage.styled.js";


export const LoginPage = ({setIsAuth}) => {
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsAuth(true);
        navigate(paths.MAIN);
        console.log(loginHandler);
    }

    return (
        <Wrapper>
            <ContainerSign>
                <Modal>
                    <ModalBlock>
                        <ModalTittle>
                            <h2>Вход</h2>
                        </ModalTittle>
                        <ModalFormLogin>
                            <ModalFormLoginInput placeholder="Эл. почта"/>
                            <ModalFormLoginInput placeholder="Пароль"/>
                            <BtnEnter onClick={loginHandler}>Войти</BtnEnter>
                            <BlockRegistration>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </BlockRegistration>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}
