import {createContext, useState} from "react";
import {cardList} from "../data.js";

export const CardContext = createContext(null)
export const CardsProvider = ({children}) => {
    const [cards, setCards] = useState(cardList);
    return <CardContext.Provider value={{cards, setCards}}>{children}</CardContext.Provider>
    }