import {
    HeaderPopUser,
    PopUserButton, PopUserCheckbox,
    PopUserMail,
    PopUserName,
    PopUserSetTheme,
    PopUserTheme
} from "./PopUser.styled.js";

const PopUser = ({setDarkTheme, darkTheme}) => {
    return (
        <HeaderPopUser>
            <PopUserName>Ivan Ivanov</PopUserName>
            <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
            <PopUserSetTheme>
                <PopUserTheme>{darkTheme ? 'Темная' : 'Светлая'} тема</PopUserTheme>
                <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={() => setDarkTheme(!darkTheme)}/>
            </PopUserSetTheme>
            <PopUserButton type="button" className="_hover03">Выйти</PopUserButton>
        </HeaderPopUser>);
}

export default PopUser;