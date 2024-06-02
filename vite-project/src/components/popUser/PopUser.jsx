import {
    HeaderPopUser,
    PopUserButton, PopUserCheckbox,
    PopUserMail,
    PopUserName,
    PopUserSetTheme,
    PopUserTheme
} from "./PopUser.styled.js";
import {Link} from "react-router-dom";
import {paths} from "../../routesPath.js";

const PopUser = ({setDarkTheme, darkTheme}) => {
    return (
        <HeaderPopUser>
            <PopUserName>Ivan Ivanov</PopUserName>
            <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
            <PopUserSetTheme>
                <PopUserTheme>{darkTheme ? 'Темная' : 'Светлая'} тема</PopUserTheme>
                <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={() => setDarkTheme(!darkTheme)}/>
            </PopUserSetTheme>
            <PopUserButton type="button" className="_hover03"><Link to={paths.EXIT}> Выйти </Link> </PopUserButton>
        </HeaderPopUser>);
}

export default PopUser;