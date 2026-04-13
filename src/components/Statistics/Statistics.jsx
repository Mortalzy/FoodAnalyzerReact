import ProgressRing from '../ProgressRing/ProgressRing'
import HumanParameters from '../HumanParameters/HumanParameters'
import Macronutrients from '../Macronutrients/Macronutrients'
import './Statistics.css'

const Statistics = () => {
    return (
       <div className='statistics'>
            <header className='statistics__header'>
                <ProgressRing />
                <Macronutrients />       
            </header>
            <HumanParameters />
       </div>
    )
}

export default Statistics