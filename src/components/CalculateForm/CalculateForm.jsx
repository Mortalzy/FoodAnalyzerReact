import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import OptionCards from '../OptionCards/OptionCards'
import CalculateFormOptional from '../CalculateFormOptional/CalculateFormOptional'
import { Calculator } from "lucide-react";
import './CalculateForm.css'

const CalculateForm = () => {

    const genderOptionCards = {
        label: 'Gender',
        cards: [
            {title: 'Male', isActive: true},
            {title: 'Female'},
        ]
    } 
    
    

    const activeOptionCards = {
        label: 'Activity level',
        description: 'How active you on a typical day?',

        cards: [
            {title: 'Sedentary', text: 'Little or no exercise'},
            {title: 'Light', text: '1-3 days/week'},
            {title: 'Moderate', text: '3-5 days/week', isActive: true},
            {title: 'Active', text: '6-7 days/week'},
            {title: 'Very active', text: 'Hard training daily'},
        ]
    }

    const goalOptionCards = {
        label: 'Goal',
        description: 'What is your main goal?',

        cards: [
        {title: 'Maintain weight', text: 'stay at current weight'},
        {title: 'Lose weight', text: 'create a calorie deficit'},
        {title: 'Gain weight', text: 'Create a calorie surplus', isActive: true},
        
    ]
}

    return (
        <div className='calculate-form'>
            <header className="header">
                <h1 className="header__title">Personal data</h1>
                <p className='header__text'>Enter your details to get accurate calories recommdendations</p>
            </header>
            
            <section className='calculate-form__parameters'>

                <InputField
                label="Age"
                value={17}
                suffix="y.o"
                type="number"
                />
                
                <OptionCards
                optionCards={genderOptionCards} 
                />
                
                <InputField
                label="Height"
                value={177}
                suffix="cm"
                type="number" 
                />
                

                <InputField
                label="Weight"
                value={65}
                suffix="kg"
                type="number"
                />
            </section>

            
            <section className='calculate-form__activity'>

                <OptionCards
                optionCards={activeOptionCards} 
                />

            </section>

            <section className='calculate-form__goal'>
                
                <OptionCards 
                optionCards={goalOptionCards}
                />    
                
            </section >

            <section className='calculate-form__optional'>
                
                <CalculateFormOptional />

            </section>

            <section className='calculate-form__buttons'>
                <Button
                className='calculate-form__reset-button'
                >
                    
                    Reset
                </Button>

                <Button
                className='calculate-form__calculate-button'
                >
                    <Calculator />
                    Calculate calories
                </Button>
            </section>
        </div>
    )
}

export default CalculateForm