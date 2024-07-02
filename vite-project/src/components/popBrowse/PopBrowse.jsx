import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Calendar from "../calendar/Calendar";
import {paths} from "../../routesPath";
import {CardContext} from "../../context/cardContext";
import {colorIndicator} from "../card/Card.jsx";
import {deleteCard, saveCorrection} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";
import {
    BtnGroup,
    CategoriesTheme,
    PopBrowseBlock,
    PopBrowseCnt,
    PopBrowseContent, PopBrowseEdit, PopBrowseEditBtn,
    PopBrowseMain, PopBrowseStatus,
    PopBrowseTopBlock,
    PopBrowseTtl, StatusTheme, StatusThemeLabel, StatusThemes, TextArea
} from "./PopBrowse.styled.js";
import {
    Categorie,
    Categories,
    ColorLabelInTasks,
    RadioInput,
    WrapperRadio
} from "../popNewCard/PopNewCard.styled.js";
import {statusList} from "../main/Main.jsx";


const PopBrowse = () => {
    const {user} = useContext(UserContext)
    const {cards, setCards} = useContext(CardContext)

    const { id } = useParams()
    const navigate = useNavigate()
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

    const onChangeStatus = (e) => {
        setInputValue({
            ...inputValue,
            status: e.target.value,
        })
    }

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const onChangeDate = (freshDate) => {
        if (!inputValue.correctionMode)
            return

        setInputValue({
            ...inputValue,
            date: freshDate,
        })
    }

    function handleCorrectMode(e) {
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

    function handleCorrect() {

        if (!inputValue.description) {
            return setError('Введите описание задачи')
        }

        saveCorrection({id, newData: inputValue, token: user.token})
            .then((res) => {
                setCards(res.tasks)
                setInputValue({
                    ...inputValue,
                    correctionMode: false,
                })
            })
            .catch((err) => {
                setError(err.message)
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
                            <StatusThemes>
                                {
                                    inputValue.correctionMode
                                        ? statusList.map((item, index) => {
                                            const id = `status-${index}`
                                            return (
                                                <StatusTheme key={index} className="status__theme"
                                                             $isActive={inputValue.status === item}>
                                                    <StatusThemeLabel htmlFor={id}>{item}</StatusThemeLabel>
                                                    <RadioInput onChange={onChangeStatus} type="radio" name="status"
                                                                id={id} value={item}/>
                                                </StatusTheme>
                                            )
                                        })
                                        : <StatusTheme className="status__theme _gray">
                                            <p className="_gray">{inputValue.status}</p>
                                        </StatusTheme>
                                }
                            </StatusThemes>
                        </div>
                        <div className="pop-browse__wrap">
                        <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <PopBrowseStatus>Описание задачи</PopBrowseStatus>
                                    <TextArea className="form-browse__area" name="description" id="textArea01" $readonly={!inputValue.correctionMode}
                                              placeholder="Введите описание задачи..." value={inputValue.description} onChange={onChangeInput} />
                                </div>
                            </form>
                            <Calendar date={inputValue.date} setDate={onChangeDate} />
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
                        <PopBrowseEdit>
                            <BtnGroup>
                                {
                                    !inputValue.correctionMode
                                        ? <PopBrowseEditBtn className="btn-browse__edit _btn-bor _hover03" onClick={handleCorrectMode}>Редактировать задачу</PopBrowseEditBtn>
                                        : <>
                                            <PopBrowseEditBtn $primary={true} className="btn-edit__edit _btn-bg _hover01" onClick={handleCorrect}>Сохранить</PopBrowseEditBtn>
                                            <PopBrowseEditBtn className="btn-edit__edit _btn-bor _hover03" onClick={handleCorrectionCancel}>Отменить</PopBrowseEditBtn>
                                        </>
                                }
                                <PopBrowseEditBtn className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>Удалить задачу</PopBrowseEditBtn>
                            </BtnGroup>
                            <PopBrowseEditBtn $primary={true} className="btn-browse__close _btn-bg _hover01" onClick={() => navigate(paths.MAIN)}>Закрыть</PopBrowseEditBtn>
                        </PopBrowseEdit>
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseCnt>
        </PopBrowseMain>
    )
};

export default PopBrowse;
