import './Macronutrients.css'

const Macronutrients = () => {
    return (
        <div className="macronutrients">
            <div className="proteins">
                <p className="proteins__title">Proteins</p>
                <p className="proteins__value">70/90</p>
            </div>

            <div className="carbohydrates">
                <p className="carbohydrates__title">Carbohydrates</p>
                <p className="carbohydrates__value">80/120</p>
            </div>

            <div className="fats">
                <p className="fats__title">fats</p>
                <p className="fats__value">60/100</p>
            </div>
        </div>
    )
}

export default Macronutrients