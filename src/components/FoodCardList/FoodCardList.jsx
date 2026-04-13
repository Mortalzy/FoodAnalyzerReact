import FoodCard from '../FoodCard/FoodCard'
import './FoodCardList.css'

const FoodCardList = () => {
    return (
        <div className='wrapper'>
            <ul className='card-list'>
                <FoodCard />
            </ul>
        </div>
    )
}

export default FoodCardList