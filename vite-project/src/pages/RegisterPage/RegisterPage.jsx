import {Wrapper} from "../../styled files/global.styled.js";
import {Link} from "react-router-dom";
import {paths} from "../../routesPath";
import {
    BlockRegistration,
    BtnEnter,
    Modal,
    ModalBlock,
    ModalFormLogin,
    ModalFormLoginInput,
    ModalTittle,
} from "../LoginPage/LoginPage.styled.js";
import {AlertMsg, ContainerSignUp} from "./RegisterPage.styled.js";
import {register} from "../../API/auth.js";
import {useContext, useState} from "react";
import {UserContext} from "../../context/userContext.jsx";


export const RegisterPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const {loginUser} = useContext(UserContext);

    const [inputValue, setInputValue] = useState({
        login: '',
        name: '',
        password: '',
    });
    const onChangeValue = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value}); {/*берется name который перед placeholder*/}
    }

    const registerHandler = (e) => {
        e.preventDefault();

        const {login, name, password} = inputValue;
        if (!login || !name || !password) {
           return setErrorMessage('Заполните все поля')
        }
        if(password.length < 3) {
            return setErrorMessage('пароль должен содержать хотя бы 3 символа')
        }

        register(inputValue)
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
        <ContainerSignUp>
            <Modal>
                <ModalBlock>
                    <ModalTittle>
                        <h2>Регистрация</h2>
                    </ModalTittle>
                    <ModalFormLogin>
                        <ModalFormLoginInput onChange={onChangeValue} value={inputValue.name} name = "name" placeholder="Имя"/>
                        <ModalFormLoginInput onChange={onChangeValue} value ={inputValue.login} name = "login" placeholder="Эл. почта"/>
                        <ModalFormLoginInput onChange={onChangeValue} value ={inputValue.password} type="password" name = "password" placeholder="Пароль"/>
                        <AlertMsg>{errorMessage}</AlertMsg>
                        <BtnEnter onClick={registerHandler}>Зарегистрироваться</BtnEnter>
                        <BlockRegistration>
                            <p>Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link></p>
                        </BlockRegistration>
                    </ModalFormLogin>
                </ModalBlock>
            </Modal>
        </ContainerSignUp>
        </Wrapper>
    )
}
