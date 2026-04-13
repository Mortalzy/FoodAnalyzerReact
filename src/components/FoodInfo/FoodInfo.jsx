import './FoodInfo.css'

const FoodInfo = () => {
    return (
        <div className='food-info'>
            <p className='food-info__total'>Total: 3 cards</p>
            <button className='food-info__delete-all-button'>Delete cards</button>
        </div>
    )
}

export default FoodInfo