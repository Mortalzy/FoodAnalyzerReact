import FoodCard from '../FoodCard/FoodCard'
import './FoodCardList.css'

const FoodCardList = (props) => {
    const {
        foodCards,
        deleteCard
    } = props

    return (
        <div className='wrapper'>
            <ul className='card-list'>
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