import * as S from "./PopUser.styled";
import {useNavigate} from "react-router-dom";
import {paths} from "../../routesPath";


const PopUser = ({setDarkTheme, darkTheme, isAuth}) => {
    const navigate = useNavigate();

    return (
        <S.HeaderPopUser id={"pop-user"}>
            <S.PopUserName>{isAuth.name}</S.PopUserName>
            <S.PopUserMail>{isAuth.login}</S.PopUserMail>
            <S.PopUserSetTheme>
                <S.PopUserTheme>{darkTheme ? 'Темная' : 'Светлая'} тема</S.PopUserTheme>
                <S.PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={() => setDarkTheme(!darkTheme)}/>
            </S.PopUserSetTheme>
            <S.PopUserButton onClick={() => navigate(paths.EXIT)}> Выйти </S.PopUserButton>
        </S.HeaderPopUser>);
}

export default PopUser;
