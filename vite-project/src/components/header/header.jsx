import PopUser from "../popUser/PopUser.jsx";
import {useEffect, useState} from "react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const manualOpen = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen]);

    return (<header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo _show _light">
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
                </div>
                <nav className="header__nav">
                    <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать
                        новую задачу</a></button>
                    <div className="header__user _hover02" onClick={manualOpen}>Ivan Ivanov</div>
                    {isOpen && (<PopUser/>)}
                    {/*<div className="header__pop-user-set pop-user-set" id="user-set-target">
                        <p className="pop-user-set__name">Ivan Ivanov</p>
                        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Темная тема</p>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </div>
                        <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                    </div>*/}
                </nav>
            </div>
        </div>
    </header>)
};

export default Header;