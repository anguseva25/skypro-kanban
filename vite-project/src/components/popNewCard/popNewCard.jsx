import Calendar from "../calendar/Calendar";
import {
    BtnFormNewCreate,
    Categorie,
    Categories, CategoriesTheme,
    PopNewCardBlock,
    PopNewCardContainer,
    PopNewCardContent, PopNewCardFormBlock, PopNewCardFormNew,
    PopNewCardLink,
    PopNewCardTitle, PopNewCardWrap
} from "./PopNewCard.styled.js";


const PopNewCard = () => {
    return (
        <PopNewCard>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTitle/>
                        <PopNewCardLink>&#10006;</PopNewCardLink>
                        <PopNewCardWrap>
                            <PopNewCardFormNew>
                                <PopNewCardFormBlock>
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <input className="form-new__input" type="text" name="name" id="formTitle"
                                           placeholder="Введите название задачи..." autoFocus/>
                                </PopNewCardFormBlock>
                                <PopNewCardFormBlock>
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <textarea className="form-new__area" name="text" id="textArea"
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
                        <BtnFormNewCreate>Создать задачу</BtnFormNewCreate>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCard>
    );
};

export default PopNewCard;
