import { createContext, useContext, useState, useEffect } from "react";

export const FoodCardsContext = createContext({})

const FoodCardsProvider = ({children}) => {

     const [foodCards, setFoodCards] = useState( () => {
        const storageFoodCards = JSON.parse(localStorage.getItem('foodCards')) ?? []
        return storageFoodCards
    })

    const deleteCard = (cardId) => {
        if (foodCards) {
            const filteredCards = foodCards.filter( ({id}) => cardId !== id)

            setFoodCards(filteredCards)

            localStorage.setItem('foodCards', JSON.stringify(filteredCards))
        }
    }

    const deleteAll = () => {
        const isConfirmed = confirm('Are you really want to delete all?')

        if(isConfirmed) {
            setFoodCards([])
            localStorage.setItem('foodCards', JSON.stringify(foodCards))
        }
    }

    const addCard = (newFood) => {
        setFoodCards(prev => [...prev, newFood])
    }

    useEffect( () => {
        localStorage.setItem('foodCards', JSON.stringify(foodCards))
    }, [foodCards])

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

const useFoodCards = () => {
    const context = useContext(FoodCardsContext)

    return context
}

export {
   FoodCardsProvider,
   useFoodCards,
}