import {Wrapper} from "../../global.styled.js";
import {NonFoundPage} from "./nonFoundPage.js";
import {Link} from "react-router-dom";
import {paths} from "../../routesPath.js";

export const NotFoundPage = () => {
    return (
        <Wrapper>
            <NonFoundPage>
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">Ошибка 404</h1>
                                        <h2 className="text-center ">Страница не найдена</h2>
                                    </div>
                                    <div className="contant_box_404">
                                        <h3 className="h2">Похоже вы потерялись</h3>
                                        <p>Страница, что вы ищите, не найдена!</p>
                                        <Link to={paths.MAIN} className="link_404">Вернуться на главную</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </NonFoundPage>
        </Wrapper>
    )
}