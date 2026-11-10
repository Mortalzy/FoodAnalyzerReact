import FoodCard from '../FoodCard/FoodCard'
import './FoodCardList.css'

import { useContext } from 'react'
import { FoodCardsContext } from '../../context/FoodCardsContext'

const FoodCardList = () => {
    const {
        foodCards,
        deleteCard
    } = useContext(FoodCardsContext)
    return (
        <div className='wrapper'>
            <ul className='food-card-list'>
                {foodCards.map( (card) => {
                    return (
                        <FoodCard
                        key={card.id} 
                        foodCard={card}
                        deleteCard={deleteCard}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default FoodCardList