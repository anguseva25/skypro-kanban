import Calendar from "../calendar/Calendar";
import {useNavigate, useParams} from "react-router-dom";
import {cardList} from "../../data";
import {paths} from "../../routesPath";


const PopBrowse = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    // console.log(id)

    // const item = cardList[0]
    const item = cardList.filter((item) => item.id === Number(id))[0]

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{item.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{item.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme _gray">
                                    <p className="_gray">{item.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly
                                              placeholder="Введите описание задачи..." defaultValue={item.description} />
                                </div>
                            </form>
                            <Calendar selectedDate={item.date}/>
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать
                                    задачу</a></button>
                                <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate(paths.MAIN)}>Закрыть</button>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                                <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить
                                    задачу</a></button>
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
