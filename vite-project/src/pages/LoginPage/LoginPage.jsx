import {Wrapper} from "../../styled files/global.styled.js";
import {Link} from "react-router-dom";
import {paths} from "../../routesPath";
import {
    BlockRegistration,
    BtnEnter,
    ContainerSign, Modal,
    ModalBlock,
    ModalFormLogin,
    ModalFormLoginInput, ModalTittle,
} from "./LoginPage.styled.js";
import {useContext, useState} from "react";
import {signIn} from "../../API/auth.js";
import {AlertMsg} from "../RegisterPage/RegisterPage.styled.js";
import {UserContext} from "../../context/userContext.jsx";


export const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const {loginUser} = useContext(UserContext);

    const [inputValue, setInputValue] = useState({
        login: '',
        password: '',
    });
    const onChangeValue = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value}); {/*берется name который перед placeholder*/}
    }

    const loginHandler = (e) => {
        e.preventDefault();

        const {login, password} = inputValue;
        if (!login || !password) {
            return setErrorMessage('Заполните все поля')
        }
        if(password.length < 3) {
            return setErrorMessage('пароль должен содержать хотя бы 3 символа')
        }

        signIn(inputValue)
            .then((res) => {
                setErrorMessage('')
                loginUser(res)
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
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
                            <ModalFormLoginInput onChange={onChangeValue} value={inputValue.login} name = "login" placeholder="Эл. почта"/>
                            <ModalFormLoginInput onChange={onChangeValue} value ={inputValue.password} type="password" name = "password" placeholder="Пароль"/>
                            <AlertMsg>{errorMessage}</AlertMsg>
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
