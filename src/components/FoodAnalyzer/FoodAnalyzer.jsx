import { useState } from "react"

import Statistics from "../Statistics/Statistics"
import FoodInfo from "../FoodInfo/FoodInfo"
import FoodCardList from "../FoodCardList/FoodCardList"
import NavigationPanel from "../NavigationPanel/NavigationPanel"

import './FoodAnalyzer.css'


const FoodAnalyzer = () => {

    const [foodCards, setFoodCards] = useState([
        {id: 'id-1', title: 'Lasagna', weight: 250, macros: {kcal: 250, proteins: 25, fats: 25, carbs: 25}},
        {id: 'id-2', title: 'Baked potato' , weight: 300, macros: {kcal: 350, proteins: 25, fats: 25, carbs: 25}},
        {id: 'id-3', title: 'Steak', weight: 200, macros: {kcal: 200, proteins: 25, fats: 25, carbs: 25}},
    ])

    const deleteCard = (cardId) => {
        if (foodCards) {
            const filteredCards = foodCards.filter( ({id}) => cardId !== id)

            setFoodCards(filteredCards)
        }
    }

    const deleteAll = () => {
        const isConfirmed = confirm('Are you really want to delete all?')

        if(isConfirmed) {
            setFoodCards([])
        }
    }
    
    const totalCards = foodCards.length

    const humanParameters = {
        age: 20,
        weight: 65,
        height: 177,
        gender: 'Male',
        activityCoefficient: 1.55,
    }

    const calculateMacros = () => {

        const {age, weight, height, gender, activityCoefficient} = humanParameters

        const bmr = 
            gender === 'Male' 
            ?  10 * weight + 6.25 * height - 5 * age + 5
            :  10 * weight + 6.25 * height - 5 * age - 161

        let dailyCalories = bmr * activityCoefficient
        let dailyProteins = weight * 2
        let dailyFats = weight * 0.9
        let dailyCarbs = (dailyCalories - dailyProteins * 4 - dailyFats * 9) / 4

        dailyCalories = Math.round(dailyCalories)
        dailyProteins = Math.round(dailyProteins)
        dailyFats = Math.round(dailyFats)
        dailyCarbs = Math.round(dailyCarbs)

        return {
            dailyCalories,
            dailyProteins,
            dailyFats,
            dailyCarbs
        }
    }


    return (
        <div className="food-analyzer">
            <Statistics
            macros={calculateMacros()}
            humanParameters={humanParameters}
            />
            <FoodInfo
            deleteAll={deleteAll}
            totalCards={totalCards}
            />
            <FoodCardList
            foodCards={foodCards}
            deleteCard={deleteCard}
            />
            <NavigationPanel />
        </div>
        
    )
}

export default FoodAnalyzer