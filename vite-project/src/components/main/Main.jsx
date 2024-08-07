import Column from '../column/Column';
import Loader from "../loader/Loader";
import {MainBlock, MainContent, MainStyleTotal} from "./Main.styled"
import {Container} from "../../styled files/shared.styled.js";


export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

const Main = ({cardList, isLoading, errorMesg}) => {
    return (
        <MainStyleTotal>
            <Container>
                <MainBlock>
                    <MainContent>
                        {errorMesg ? <p>{errorMesg}</p> :(
                            isLoading
                                ? <Loader/>
                                : statusList.map((status) => (
                                    <Column
                                        key={status}
                                        title={status}
                                        cardList={cardList.filter(card => card.status === status)}
                                    />
                                ))
                        )}

                    </MainContent>
                </MainBlock>
            </Container>
        </MainStyleTotal>
    );
};

export default Main;
