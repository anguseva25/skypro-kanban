import {Button} from "../../styled files/shared.styled.js";
import {ExitHeader, PopExitBlock, PopExitCnt, PopExitFormGroup, PopExitTitle} from "./PopExit";
import {Link, useNavigate} from "react-router-dom";
import {paths} from "../../routesPath";
import {useContext} from "react";
import {UserContext} from "../../context/userContext.jsx";


const PopExit = () => {
    const navigate = useNavigate()
    const {logoutUser} = useContext(UserContext)

    function exit() {
        logoutUser()
        navigate(paths.LOGIN)
    }

    return (
        <ExitHeader>
            <PopExitCnt>
                <PopExitBlock>
                    <PopExitTitle>
                        <h2>Выйти из аккаунта?</h2>
                    </PopExitTitle>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <PopExitFormGroup>
                            <Button $primary onClick={exit}>Да, выйти</Button>
                            <Button><Link to={paths.MAIN}>Нет, остаться</Link></Button>
                            {/*<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>*/}
                            {/*<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>*/}
                        </PopExitFormGroup>
                    </form>
                </PopExitBlock>
            </PopExitCnt>
        </ExitHeader>
    );
};

export default PopExit;
