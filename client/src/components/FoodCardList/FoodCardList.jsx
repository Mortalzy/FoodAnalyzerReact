import FoodCard from '../FoodCard/FoodCard'
import './FoodCardList.css'

import {useFoodCards } from '../../context/FoodCardsContext'

const FoodCardList = () => {
    const {
        foodCards,
        deleteFood
    } = useFoodCards()
    
    return (
        <div className='wrapper'>
            <ul className='food-card-list'>
                {foodCards.map( (card) => {
                    return (
                        <FoodCard
                        key={card.id} 
                        foodCard={card}
                        deleteCard={deleteFood}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default FoodCardList