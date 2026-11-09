import {useState, useEffect} from 'react'

const useFood = () => {
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

    }

    useEffect( () => {
        localStorage.setItem('foodCards', JSON.stringify(foodCards))
    }, [foodCards])

    return {
        foodCards,
        deleteCard,
        deleteAll,
        addCard,
    }
}

export default useFood