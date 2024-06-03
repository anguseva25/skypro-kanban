import {Wrapper} from "../../global.styled";
import {Link, useNavigate} from "react-router-dom";
import {paths} from "../../routesPath";


export const LoginPage = ({setIsAuth}) => {
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsAuth(true);
        navigate(paths.MAIN);
    }

    return (
        <Wrapper>
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" type="text" name="login" id="formlogin"
                                   placeholder="Эл. почта"/>
                            <input className="modal__input" type="password" name="password" id="formpassword"
                                   placeholder="Пароль"/>
                            <button onClick={loginHandler} className="modal__btn-enter _hover01" id="btnEnter">
                                Войти
                            </button>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
