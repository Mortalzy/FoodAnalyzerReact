import {ChevronRight, Trash } from "lucide-react";
import { useFoodCards } from "../../context/FoodCardsContext";
import './FoodInfo.css'

const FoodInfo = () => {
    const {deleteAll, foodCards} = useFoodCards()
    
    const totalCards = foodCards.length

    return (
        <div className='food-info'>
            <p className='food-info__total'>Total: {totalCards} cards</p>
            <button 
            className='food-info__delete-all-button'
            onClick={deleteAll}
            >
            <span className="food-info__icon">
                <Trash size={20}/>
            </span>
            Delete all 
            <span className="food-info__icon">
                <ChevronRight size={20}/>
            </span>
            
            </button>
        </div>
    )
}

export default FoodInfo