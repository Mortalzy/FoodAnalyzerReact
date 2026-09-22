import FoodCardMacros from '../FoodCardMacros/FoodCardMacros'
import { Trash2 } from "lucide-react";
import './FoodCard.css'

const FoodCard = (props) => {
    const {
        foodCard,
        deleteCard,
    } = props

    const {id, title, weight, foodImg} = foodCard

    return (
        <li className='food-card'>
            <div className='food-card__left-side'>
                <div className='food-card__preview-photo'>
                    <img
                    className="food-card__img" 
                    src={foodImg} 
                    alt={title}
                     />
                </div>

                <div className='food-card__food-info'>
                    <p className='food-card__title'>{title}</p>
                    <p className='food-card__grams'>{weight} g</p>
                </div>
                
            </div>
                
            <div className='food-card__right-side'>
                <FoodCardMacros
                foodCard={foodCard} 
                />
                <button 
                className='food-card__delete-button'
                onClick={() => deleteCard(id)}
                >
                <div className='food-card__delete-icon'>
                    <Trash2 size={24}/>
                </div>
                </button>
            </div>
        </li>
    )
}

export default FoodCard