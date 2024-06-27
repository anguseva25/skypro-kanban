import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Calendar from "../calendar/Calendar";
import {paths} from "../../routesPath";
import {CardContext} from "../../context/cardContext";
import {colorIndicator} from "../card/Card.jsx";
import {deleteCard} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";


const PopBrowse = () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardContext)

    const { id } = useParams()
    const navigate = useNavigate()
    const {cards} = useContext(CardContext)
    const [error, setError] = useState(null)
    const [inputValue, setInputValue] = useState({
        topic: "",
        title: "",
        description: "",
        date: new Date(),
        status: "",
        color: "",
    })

    useEffect(() => {
        if (cards.length === 0)
            return

        const item = cards.filter((item) => item._id === id)[0]

        if (!item)
            return navigate(paths.MAIN)

        setInputValue({
            ...inputValue,
            topic:       item.topic,
            title:       item.title,
            description: item.description,
            date:        new Date(item.date),
            status:      item.status,
            color:       colorIndicator[item.topic],
        })
    }, [cards])

    function handleDelete() {
        setError('')

        deleteCard({id, token: user.token})
            .then((res) => {
                setCards(res.tasks)
                navigate(paths.MAIN)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{inputValue.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{inputValue.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme _gray">
                                    <p className="_gray">{inputValue.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly
                                              placeholder="Введите описание задачи..." defaultValue={inputValue.description} />
                                </div>
                            </form>
                            <Calendar date={inputValue.date} />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        {error && error}
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать
                                    задачу</a></button>
                                <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate(paths.MAIN)}>Закрыть</button>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                                <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete" onClick={handleDelete}>Удалить задачу</button>
                            </div>
                            <button className="btn-edit__close _btn-bg _hover01" onClick={() => navigate(paths.MAIN)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PopBrowse;
