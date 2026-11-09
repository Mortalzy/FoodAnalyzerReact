import { createContext } from "react";
import useFood from "../hooks/useFood";

const FoodCardsContext = createContext({})

const FoodCardsProvider = (props) => {
    const {
        children
    } = props

    const {
        foodCards,
        deleteCard,
        deleteAll,
        addCard,
    } = useFood()

    return (
        <FoodCardsContext.Provider
        value={{
            foodCards,
            deleteCard,
            deleteAll,
            addCard
        }}
        >
            {children}
        </FoodCardsContext.Provider>
    )
}

export {
    FoodCardsContext,
    FoodCardsProvider,
}