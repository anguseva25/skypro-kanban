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
import {useState} from "react";
import {signIn} from "../../API/auth.js";
import {AlertMsg} from "../RegisterPage/RegisterPage.styled.js";


export const LoginPage = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

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

            signIn(inputValue).then((res) => {
                setErrorMessage('')
                setIsAuth(res.user);
                localStorage.setItem('user', JSON.stringify(res.user));
                navigate(paths.MAIN)
            } ).catch((error) => {
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
