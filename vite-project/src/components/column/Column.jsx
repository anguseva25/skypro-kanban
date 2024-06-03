import Card from "../card/Card";
import {CardsColumn, ColumnParagraph, ColumnTitle, MainColumn} from "./Column.styled";


const Column = ({title, cardList}) => {
    return (<MainColumn>
            <ColumnTitle>
                <ColumnParagraph>{title}</ColumnParagraph>
            </ColumnTitle>
            <CardsColumn>
                {cardList.map(({ id, topic, title, date }) => (
                    <Card key = {id}
                          cardId={id}
                          topic={topic}
                          title={title}
                          date={date}
                    />
                ))}

                {/*<Card category="Research" title="Задача 2" date="30.10.24"/>
                <Card category="Copywriting" title="Задача 3" date="30.10.24"/>*/}
            </CardsColumn>
        </MainColumn>
    );
};

export default Column;
