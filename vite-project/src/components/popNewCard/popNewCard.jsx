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
    PopNewCardWrap
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


    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState({
        topic: '',
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
        const topic = inputValue.topic || 'Research'
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
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
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
