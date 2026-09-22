import './FoodCardMacros.css'

const FoodCardMacros = (props) => {

    const {
        foodCard
    } = props

    const {calories, proteins, fats, carbs} = foodCard

    return (
        <div className='food-card-macros'>
            <p className='food-card-macros__calories'>{calories} Kcal</p>
            <ul className='PFC'>
                <li className='PFC_elem'>{proteins}P</li>
                <li className='PFC_elem'>{fats}F</li>
                <li className='PFC_elem'>{carbs}C</li>
            </ul>
        </div>
    )
}

export default FoodCardMacros