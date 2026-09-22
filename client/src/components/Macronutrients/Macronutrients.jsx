import './Macronutrients.css'

const Macronutrients = (props) => {

    const {
        macros,
        foodTotals,
    } = props

    const {dailyProteins, dailyFats, dailyCarbs} = macros
    const {totalProteins, totalFats, totalCarbs} = foodTotals

    return (
        <div className="macronutrients">
            <div className="proteins">
                <p className="proteins__title">Proteins</p>
                <p className="proteins__value">{totalProteins}/{dailyProteins}</p>
            </div>

            <div className="carbohydrates">
                <p className="carbohydrates__title">Carbohydrates</p>
                <p className="carbohydrates__value">{totalCarbs}/{dailyCarbs}</p>
            </div>

            <div className="fats">
                <p className="fats__title">fats</p>
                <p className="fats__value">{totalFats}/{dailyFats}</p>
            </div>
        </div>
    )
}

export default Macronutrients