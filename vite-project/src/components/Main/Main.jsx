import Column from '../column/Column.jsx';
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader.jsx";
import {MainBlock, MainContent, MainStyleTotal} from "./Main.styled.js"
import {Container} from "../shared.styled.js";

const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

const Main = ({cardList}) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        <MainStyleTotal>
            <Container>
                <MainBlock>
                    <MainContent>
                        {
                            isLoading
                                ? <Loader/>
                                : statusList.map((status) => (
                                    <Column
                                        key={status}
                                        title={status}
                                        cardList={cardList.filter(card => card.status === status)}
                                    />
                                ))
                        }
                    </MainContent>
                </MainBlock>
            </Container>
        </MainStyleTotal>
    );
};

export default Main;
