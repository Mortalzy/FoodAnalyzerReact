import InputField from '../InputField/InputField'
import { Home } from "lucide-react";
import './CalculateFormOptional.css'

const CalculateFormOptional = () => {
    return (
        <div className='optional'>
            <header className='optional__header'>
                <Home className='optional__icon'/>
                <p className='optional__title'>Optional</p>
            </header>
           



            <div className='optional__fields'>
                <InputField 
                label='Target weight'
                suffix='kg'
                type='number'
                value={65}
                />

                <InputField 
                label='Meals per day'
                type='text'
                value='3 meals'
                />
            </div>
            

        </div>
    )
}

export default CalculateFormOptional