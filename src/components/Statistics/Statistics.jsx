import ProgressRing from '../ProgressRing/ProgressRing'
import HumanParameters from '../HumanParameters/HumanParameters'
import Macronutrients from '../Macronutrients/Macronutrients'
import './Statistics.css'

const Statistics = (props) => {

    const {
        humanParameters,
        macros,
    } = props

    const {dailyCalories} = macros

    return (
       <div className='statistics'>
            <header className='statistics__header'>
                <ProgressRing
                dailyCalories={dailyCalories}
                />
                <Macronutrients
                macros={macros} 
                />       
            </header>
            <HumanParameters 
            humanParameters={humanParameters}/>
       </div>
    )
}

export default Statistics