import ProgressRing from '../ProgressRing/ProgressRing'
import HumanParameters from '../HumanParameters/HumanParameters'
import Macronutrients from '../Macronutrients/Macronutrients'
import './Statistics.css'

const Statistics = (props) => {

    const {
        humanParameters,
        macros,
        foodTotals
    } = props

    const {dailyCalories} = macros
    const {totalCalories} = foodTotals


    return (
       <div className='statistics'>
            <header className='statistics__header'>
                <ProgressRing
                dailyCalories={dailyCalories}
                totalCalories={totalCalories}
                />
                <Macronutrients
                macros={macros}
                foodTotals={foodTotals} 
                />       
            </header>
            <HumanParameters 
            humanParameters={humanParameters}/>
       </div>
    )
}

export default Statistics