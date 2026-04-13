import FoodCardMacros from '../FoodCardMacros/FoodCardMacros'
import './FoodCard.css'

const FoodCard = () => {
    return (
        <li className='food-card'>
            <div className='food-card__preview-photo'></div>
            <p className='food-card__title'>Lasagna</p>
            <FoodCardMacros />
            <button className='food-card__delete-button'>X</button>
        </li>
    )
}

export default FoodCard