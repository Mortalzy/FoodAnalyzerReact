import './FoodInfo.css'

const FoodInfo = (props) => {
    
    const {
        totalCards,
        deleteAll,
    } = props

    return (
        <div className='food-info'>
            <p className='food-info__total'>Total: {totalCards} cards</p>
            <button 
            className='food-info__delete-all-button'
            onClick={deleteAll}
            >Delete all &gt;
            </button>
        </div>
    )
}

export default FoodInfo