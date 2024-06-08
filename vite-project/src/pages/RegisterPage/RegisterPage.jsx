import {Wrapper} from "../../global.styled";
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
import {ContainerSignUp} from "./RegisterPage.styled.js";


export const RegisterPage = () => {
    return (
        <Wrapper>
        <ContainerSignUp>
            <Modal>
                <ModalBlock>
                    <ModalTittle>
                        <h2>Регистрация</h2>
                    </ModalTittle>
                    <ModalFormLogin>
                        <ModalFormLoginInput placeholder="Имя"/>
                        <ModalFormLoginInput placeholder="Эл. почта"/>
                        <ModalFormLoginInput placeholder="Пароль"/>
                        <BtnEnter><BlockRegistration>Зарегистрироваться</BlockRegistration></BtnEnter>
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
