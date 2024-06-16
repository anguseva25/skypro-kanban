import Calendar from "../calendar/Calendar";
import {
    BtnFormNewCreate,
    Categorie,
    Categories,
    CategoriesTheme,
    PopNewCardBlock,
    PopNewCardCommun,
    PopNewCardContainer,
    PopNewCardContent,
    PopNewCardFormBlock,
    PopNewCardFormNew,
    PopNewCardTitle,
    PopNewCardWrap, RadioInput, WrapperRadio
} from "./PopNewCard.styled.js";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {paths} from "../../routesPath.js";
import {addNewCard} from "../../API/cardsAPI.js";
import {UserContext} from "../../context/userContext.jsx";
import {CardContext} from "../../context/cardContext.jsx";


export const PopNewCard = () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardContext);
    const navigate = useNavigate();

    const [topic, setTopic] = useState('')
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState({
        title: '',
        description: '',
        status: 'Без статуса',
    });

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    const onAddNewCard = () => {
        setError('')

        if (!inputValue.description) {
            return setError('Введите описание задачи')
        }

        const title = inputValue.title || 'Новая задача'
        const newTask = {
            ...inputValue, title, topic
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
                        <PopNewCardTitle/>
                        <Link to={paths.MAIN}> &#10006; </Link>
                        <PopNewCardWrap>
                            <PopNewCardFormNew>
                                <PopNewCardFormBlock>
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <input onChange={onChangeInput} className="form-new__input" type="text"
                                           name="title" id="formTitle"
                                           placeholder="Введите название задачи..." autoFocus/>
                                </PopNewCardFormBlock>
                                <PopNewCardFormBlock>
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <textarea onChange={onChangeInput} className="form-new__area" name="description"
                                              id="textArea"
                                              placeholder="Введите описание задачи..."></textarea>
                                </PopNewCardFormBlock>
                            </PopNewCardFormNew>
                            <Calendar/>
                        </PopNewCardWrap>
                        <Categories>
                            <Categorie>Категория</Categorie>
                            <CategoriesTheme>
                                <WrapperRadio $isActive={topic === 'Web Design'} className="categories__theme _orange _active-category">
                                    <label htmlFor="radio1">Web Design</label>
                                    <RadioInput onChange={(e)=> setTopic(e.target.value)} className="_orange" type="radio" name="try" id="radio1" value={"Web Design"}/>
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Research'}  className="categories__theme _green">
                                    <label htmlFor="radio1">Research</label>
                                    <RadioInput onChange={(e)=> setTopic(e.target.value)} className="_green" type="radio" name="try" id="radio2" value={"Research"}/>
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Copywriting'}  className="categories__theme _purple">
                                    <label htmlFor="radio1">Copywriting</label>
                                    <RadioInput onChange={(e)=> setTopic(e.target.value)} className="_purple" type="radio" name="try" id="radio3" value={"Copywriting"}/>
                                </WrapperRadio>
                            </CategoriesTheme>
                        </Categories>
                        {error && error}
                        <BtnFormNewCreate onChange={onAddNewCard}>Создать задачу</BtnFormNewCreate>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardCommun>
    );
};

export default PopNewCard;
