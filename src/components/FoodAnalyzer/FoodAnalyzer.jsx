import Statistics from "../Statistics/Statistics"
import FoodInfo from "../FoodInfo/FoodInfo"
import FoodCardList from "../FoodCardList/FoodCardList"
import './FoodAnalyzer.css'

const FoodAnalyzer = () => {
    return (
        <div className="food-analyzer">
            <Statistics />
            <FoodInfo />
            <FoodCardList />

        </div>
        
    )
}

export default FoodAnalyzer