import Card from "../card/Card.jsx";

const Column = ({title, cardList}) => {
    return (<div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cardList.map(({ id, topic, title, date }) => (
                    <Card key = {id}
                          topic={topic}
                          title={title}
                          date={date}
                    />
                ))}

                {/*<Card category="Research" title="Задача 2" date="30.10.24"/>
                <Card category="Copywriting" title="Задача 3" date="30.10.24"/>*/}
            </div>
        </div>
    );
};
export default Column;