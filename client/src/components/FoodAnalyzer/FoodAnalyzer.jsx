import { useEffect, useState } from "react"

import Statistics from "../Statistics/Statistics"
import FoodInfo from "../FoodInfo/FoodInfo"
import FoodCardList from "../FoodCardList/FoodCardList"
import NavigationPanel from "../NavigationPanel/NavigationPanel"

import './FoodAnalyzer.css'


const FoodAnalyzer = () => {
    return (
        <>
            <Statistics/>
            <FoodInfo/>
            <FoodCardList/>
            <NavigationPanel/>
        </>
            
       
        
    )
}

export default FoodAnalyzer