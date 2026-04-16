import './Macronutrients.css'

const Macronutrients = (props) => {

    const {
        macros
    } = props

    const {dailyProteins, dailyFats, dailyCarbs} = macros

    return (
        <div className="macronutrients">
            <div className="proteins">
                <p className="proteins__title">Proteins</p>
                <p className="proteins__value">70/{dailyProteins}</p>
            </div>

            <div className="carbohydrates">
                <p className="carbohydrates__title">Carbohydrates</p>
                <p className="carbohydrates__value">80/{dailyCarbs}</p>
            </div>

            <div className="fats">
                <p className="fats__title">fats</p>
                <p className="fats__value">60/{dailyFats}</p>
            </div>
        </div>
    )
}

export default Macronutrients