import { createContext, useContext, useState, useEffect } from "react";
import { getFoodsApi, createFoodApi, deleteFoodByIdApi, deleteAllFoodsApi } from "../api/foodApi";
import { useAuth } from "./AuthContext";

export const FoodCardsContext = createContext({})

const FoodCardsProvider = ({children}) => {
    const {token} = useAuth()

    const [foodCards, setFoodCards] = useState([])

    useEffect( () => {
        loadFoods()
    }, [])

    const loadFoods = async () => {
        try {
            const foods = await getFoodsApi(token)
            setFoodCards(foods)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    const deleteFood = async (food_id) => {
        try {
            const deleted = await deleteFoodByIdApi(food_id, token)

            const updatedFoods = foodCards.filter(food => food.id !== deleted.id)

            setFoodCards(updatedFoods)
        } 
        catch (e) {
            console.log(e.message)
        }
    }

    const deleteAll = async () => {
        const isConfirmed = confirm('Are you really want to delete all?')

        if(isConfirmed) {
            await deleteAllFoodsApi(token)
            setFoodCards([])
        }
    }

    const addFood = async (food) => {
        try {
            const newFood = await createFoodApi(food, token)

            setFoodCards(prev => [newFood, ...prev])
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <FoodCardsContext.Provider
        value={{
            foodCards,
            deleteFood,
            deleteAll,
            addFood
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