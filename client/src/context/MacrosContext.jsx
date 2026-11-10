import { createContext, useContext, useState } from "react";
import { useFoodCards } from "./FoodCardsContext";

import calculateSumParametersOfCards from "../utils/calculateSumParametersOfCards";

const MacrosContext = createContext({})

const MacrosContextProvider = ({children}) => {
    const {foodCards} = useFoodCards()

    const humanParameters = JSON.parse(localStorage.getItem('humanParameters')) ?? {
        age: 0,
        weight: 0,
        height: 0,
        gender: 'Male',
    }

    const {
        age,
        weight,
        height,
        gender,
    } = humanParameters

    const dailyMacros = JSON.parse(localStorage.getItem('dailyMacros')) ?? {
        dailyCalories: 0,
        dailyProteins: 0,
        dailyFats: 0,
        dailyCarbs: 0,
    }

    const {
        dailyCalories,
        dailyProteins,
        dailyFats,
        dailyCarbs
    } = dailyMacros 

    const {
        totalCalories,
        totalProteins,
        totalFats,
        totalCarbs
    } = calculateSumParametersOfCards(foodCards)
    return (
        <MacrosContext.Provider 
        value={{
            totalCalories,
            totalProteins,
            totalFats,
            totalCarbs,
            dailyCalories,
            dailyProteins,
            dailyFats,
            dailyCarbs,
            age, weight, height, gender
        }}>
            {children}
        </MacrosContext.Provider>
    )
}

const useMacros = () => {
    const context = useContext(MacrosContext)

    return context
}

export {
    MacrosContextProvider,
    useMacros,
}