import Calendar from "../calendar/Calendar";
import {
    BtnFormNewCreate,
    Categorie,
    Categories,
    CategoriesTheme, CloseNewTask, ColorLabelInTasks, LabelNewTask,
    PopNewCardBlock,
    PopNewCardCommun,
    PopNewCardContainer,
    PopNewCardContent,
    PopNewCardFormBlock,
    PopNewCardFormNew,
    PopNewCardTitle,
    PopNewCardWrap, RadioInput, TextArea, TextAreaInput, WrapperRadio
} from "./PopNewCard.styled.js";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {paths} from "../../routesPath.js";
import {addNewCard} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";
import {CardContext} from "../../context/cardContext.jsx";


export const PopNewCard = () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardContext)
    const navigate = useNavigate()

    String.prototype.safeCode = function () {
        return this
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    };

    const [date, setDate] = useState('');
    const [topic, setTopic] = useState('')
    const [error, setError] = useState(null)
    const [inputValue, setInputValue] = useState({
        title: '',
        description: '',
        status: 'Без статуса',
    });

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
    }

    const onChangeRadio = (e) => {
        setTopic(e.target.value);
    }

    const onAddNewCard = () => {
        setError('')

        for (const key in inputValue) {
            inputValue[key] = inputValue[key].trim();
        }

        if (!inputValue.title) {
            return setError('Введите название задачи')
        }

        if (!inputValue.description) {
            return setError('Введите описание задачи')
        }

        if (!topic) {
            return setError('Выберите категорию задачи')
        }

        if (!date) {
            return setError('Укажите срок исполнения задачи')
        }

        const newTask = {
            ...inputValue, date, topic,
        }

        addNewCard({token: user.token, newTask})
            .then((res) => {
                setCards(res.tasks)
                navigate(paths.MAIN)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return (
        <PopNewCardCommun>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTitle className="pop-new-card__ttl">Создание задачи</PopNewCardTitle>
                        <CloseNewTask to={paths.MAIN}> &#10006; </CloseNewTask>
                        <PopNewCardWrap>
                            <PopNewCardFormNew>
                                <PopNewCardFormBlock>
                                    <LabelNewTask htmlFor="formTitle" className="subttl">Название задачи</LabelNewTask>
                                    <TextAreaInput onChange={onChangeInput} className="form-new__input8" type="text"
                                           name="title" id="formTitle"
                                           placeholder="Введите название задачи..." autoFocus/>
                                </PopNewCardFormBlock>
                                <PopNewCardFormBlock>
                                    <LabelNewTask htmlFor="textArea" className="subttl">Описание задачи</LabelNewTask>
                                    <TextArea onChange={onChangeInput} className="form-new__area7" name="description"
                                              id="textArea"
                                              placeholder="Введите описание задачи..." />
                                </PopNewCardFormBlock>
                            </PopNewCardFormNew>
                            <Calendar date={date} setDate={setDate} />
                        </PopNewCardWrap>
                        <Categories>
                            <Categorie>Категория</Categorie>
                            <CategoriesTheme>
                                <WrapperRadio $isActive={topic === 'Web Design'}
                                              className="categories__theme5 _orange _active-category9">
                                    <ColorLabelInTasks htmlFor="radio1" $color={"orange"}>Web Design</ColorLabelInTasks>
                                    <RadioInput onChange={onChangeRadio} className="_orange"
                                                type="radio" name="try" id="radio1" value={"Web Design"}/>
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Research'} className="categories__theme5 _green">
                                    <ColorLabelInTasks htmlFor="radio2" $color={"green"}>Research</ColorLabelInTasks>
                                    <RadioInput onChange={onChangeRadio} className="_green"
                                                type="radio" name="try" id="radio2" value={"Research"}/>
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Copywriting'} className="categories__theme5 _purple">
                                    <ColorLabelInTasks htmlFor="radio3" $color={"purple"}>Copywriting</ColorLabelInTasks>
                                    <RadioInput onChange={onChangeRadio} className="_purple"
                                                type="radio" name="try" id="radio3" value={"Copywriting"}/>
                                </WrapperRadio>
                            </CategoriesTheme>
                        </Categories>
                        {error && error}
                        <BtnFormNewCreate onClick={onAddNewCard}>Создать задачу</BtnFormNewCreate>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardCommun>
    );
};

export default PopNewCard;
