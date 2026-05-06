import { useEffect, useState } from "react"

import Statistics from "../Statistics/Statistics"
import FoodInfo from "../FoodInfo/FoodInfo"
import FoodCardList from "../FoodCardList/FoodCardList"
import NavigationPanel from "../NavigationPanel/NavigationPanel"

import './FoodAnalyzer.css'


const FoodAnalyzer = () => {

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

    

    useEffect( () => {
        localStorage.setItem('foodCards', JSON.stringify(foodCards))
    }, [foodCards])
    
    const totalCards = foodCards.length

    const humanParameters = JSON.parse(localStorage.getItem('humanParameters')) ?? {
        age: 0,
        weight: 0,
        height: 0,
        gender: 'Male',
    }

    const dailyMacros = JSON.parse(localStorage.getItem('dailyMacros'))

    const calculateSumParametersOfCards = () => {
        const totalCalories = foodCards.reduce( (total, {calories}) => {
            return total + calories
        }, 0)

        const totalCarbs = foodCards.reduce( (total, {carbs}) => {
            return total + carbs
        }, 0)

        const totalFats = foodCards.reduce( (total, {fats}) => {
            return total + fats
        }, 0)

        const totalProteins = foodCards.reduce( (total, {proteins}) => {
            return total + proteins
        }, 0)

        return {
            totalCalories,
            totalProteins,
            totalFats,
            totalCarbs,
        }
    }


    return (
        <>
            <Statistics
            macros={dailyMacros}
            humanParameters={humanParameters}
            foodTotals={calculateSumParametersOfCards()}
            />
            <FoodInfo
            deleteAll={deleteAll}
            totalCards={totalCards}
            />
            <FoodCardList
            foodCards={foodCards}
            deleteCard={deleteCard}
            />

            <NavigationPanel/>
        </>
            
       
        
    )
}

export default FoodAnalyzer