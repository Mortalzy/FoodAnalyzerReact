import InputField from '../InputField/InputField'
import { Home } from "lucide-react";
import './CalculateFormOptional.css'

const CalculateFormOptional = (props) => {

    const {
        updateFormData,
        formData,
        handleChange,
    } = props

    const {targetWeight, mealsPerDay} = formData

    return (
        <div className='optional'>
            <header className='optional__header'>
                <Home size={20}
                className='optional__icon'/>
                <p className='optional__title'>Optional</p>
            </header>
        

            <div className='optional__fields'>
                <InputField 
                label='Target weight'
                name='targetWeight'
                suffix='kg'
                type='number'
                value={targetWeight}
                onChange={handleChange}
                />

                <InputField 
                label='Meals per day'
                name='mealsPerDay'
                type='number'
                suffix='meals'
                value={mealsPerDay}
                onChange={handleChange}
                />
            </div>
            

        </div>
    )
}

export default CalculateFormOptional