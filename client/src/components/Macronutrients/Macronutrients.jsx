import './Macronutrients.css'
import { useMacros } from '../../context/MacrosContext'

const Macronutrients = (props) => {

    const {
        totalCalories,
        totalProteins,
        totalFats,
        totalCarbs,
        dailyCalories,
        dailyProteins,
        dailyFats,
        dailyCarbs,
    } = useMacros()

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