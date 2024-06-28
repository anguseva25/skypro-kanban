import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Calendar from "../calendar/Calendar";
import {paths} from "../../routesPath";
import {CardContext} from "../../context/cardContext";
import {colorIndicator} from "../card/Card.jsx";
import {deleteCard} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";
import {
    CategoriesTheme,
    PopBrowseBlock,
    PopBrowseCnt,
    PopBrowseContent,
    PopBrowseMain, PopBrowseStatus,
    PopBrowseTopBlock,
    PopBrowseTtl, StatusTheme
} from "./PopBrowse.styled.js";
import {
    Categorie,
    Categories,
    ColorLabelInTasks,
    LabelNewTask,
    RadioInput,
    WrapperRadio
} from "../popNewCard/PopNewCard.styled.js";


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
        correctionMode: false,
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

    const onChangeRadio = (e) => {
        setInputValue({
            ...inputValue,
            topic: e.target.value,
        })
    }

    function handleCorrectMode(e) {
        console.log('coucou')
        setInputValue({
            ...inputValue,
            correctionMode: true,
        })
    }

    function handleCorrectionCancel(e) {
        setInputValue({
            ...inputValue,
            correctionMode: false,
        })

    }

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
        <PopBrowseMain>
            <PopBrowseCnt>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{inputValue.title}</PopBrowseTtl>

                            {
                                inputValue.correctionMode ||
                                <CategoriesTheme $color={colorIndicator[inputValue.topic]}>
                                    <p className="_orange">{inputValue.topic}</p>
                                </CategoriesTheme>
                            }
                        </PopBrowseTopBlock>
                        <div className="pop-browse__status status">
                            <PopBrowseStatus>Статус</PopBrowseStatus>
                            <StatusTheme>
                                <div className="status__theme _gray">
                                    <p className="_gray">{inputValue.status}</p>
                                </div>
                            </StatusTheme>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <PopBrowseStatus>Описание задачи</PopBrowseStatus>
                                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly
                                              placeholder="Введите описание задачи..." defaultValue={inputValue.description} />
                                </div>
                            </form>
                            <Calendar date={inputValue.date} />
                        </div>
                        {
                            inputValue.correctionMode &&
                            <Categories>
                                <Categorie>Категория</Categorie>
                                <CategoriesTheme>
                                    <WrapperRadio $isActive={inputValue.topic === 'Web Design'}
                                                  className="categories__theme5 _orange _active-category9">
                                        <ColorLabelInTasks htmlFor="radio1" $color={"orange"}>Web Design</ColorLabelInTasks>
                                        <RadioInput onChange={onChangeRadio} className="_orange"
                                                    type="radio" name="try" id="radio1" value={"Web Design"}/>
                                    </WrapperRadio>
                                    <WrapperRadio $isActive={inputValue.topic === 'Research'} className="categories__theme5 _green">
                                        <ColorLabelInTasks htmlFor="radio2" $color={"green"}>Research</ColorLabelInTasks>
                                        <RadioInput onChange={onChangeRadio} className="_green"
                                                    type="radio" name="try" id="radio2" value={"Research"}/>
                                    </WrapperRadio>
                                    <WrapperRadio $isActive={inputValue.topic === 'Copywriting'} className="categories__theme5 _purple">
                                        <ColorLabelInTasks htmlFor="radio3" $color={"purple"}>Copywriting</ColorLabelInTasks>
                                        <RadioInput onChange={onChangeRadio} className="_purple"
                                                    type="radio" name="try" id="radio3" value={"Copywriting"}/>
                                    </WrapperRadio>
                                </CategoriesTheme>
                            </Categories>
                        }
                        {error && error}
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                {
                                    !inputValue.correctionMode
                                        ? <button className="btn-browse__edit _btn-bor _hover03" onClick={handleCorrectMode}>Редактировать задачу</button>
                                        : <>
                                            <button className="btn-edit__edit _btn-bg _hover01" onClick={handleCorrectMode}>Сохранить</button>
                                            <button className="btn-edit__edit _btn-bor _hover03" onClick={handleCorrectionCancel}>Отменить</button>
                                        </>
                                }
                                <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>Удалить
                                    задачу
                                </button>
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
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseCnt>
        </PopBrowseMain>
    )
};

export default PopBrowse;
