import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import OptionCards from '../OptionCards/OptionCards'
import CalculateFormOptional from '../CalculateFormOptional/CalculateFormOptional'
import RouterLink from '../RouterLink/RouterLink'

import { Calculator } from "lucide-react";
import { useState } from 'react'

import './CalculateForm.css'


const CalculateForm = () => {

    const defaultParameters = {
        age: 17,
        weight: 65,
        height: 177,
        gender: 'Male',
        activityCoefficient: 1.2,
        goal: "Maintain weight",
        targetWeight: 60,
        mealsPerDay: 3,
    }

    const [formData, setFormData] = useState({
        ...defaultParameters,
    })

    const genderOptionCards = {
        label: 'Gender',
        cards: [
            {title: 'Male', value: 'Male'},
            {title: 'Female', value: 'Female'},
        ]
    } 

    const activeOptionCards = {
        label: 'Activity level',
        description: 'How active you on a typical day?',

        cards: [
            {title: 'Sedentary', text: 'Little or no exercise', value: 1.2},
            {title: 'Light', text: '1-3 days/week', value: 1.375},
            {title: 'Moderate', text: '3-5 days/week', value: 1.55},
            {title: 'Active', text: '6-7 days/week', value: 1.725},
            {title: 'Very active', text: 'Hard training daily', value: 1.9},
        ]
    }

    const goalOptionCards = {
        label: 'Goal',
        description: 'What is your main goal?',

        cards: [
        {title: 'Maintain weight', text: 'stay at current weight', value: 'Maintain weight'},
        {title: 'Lose weight', text: 'create a calorie deficit', value: 'Lose weight'},
        {title: 'Gain weight', text: 'Create a calorie surplus', value: "Gain weight"},
        ]
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const updateFormData = (name, value) => {
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const resetParameters = () => {
        setFormData({
            ...defaultParameters,
        })
    }

    const calculateMacros = () => {
        const {age, weight, height, gender, activityCoefficient} = formData

        const bmr = 
            gender === 'Male' 
            ?  10 * weight + 6.25 * height - 5 * age + 5
            :  10 * weight + 6.25 * height - 5 * age - 161

        let dailyCalories = bmr * activityCoefficient
        let dailyProteins = weight * 2
        let dailyFats = weight * 0.9
        let dailyCarbs = (dailyCalories - dailyProteins * 4 - dailyFats * 9) / 4

        dailyCalories = Math.round(dailyCalories)
        dailyProteins = Math.round(dailyProteins)
        dailyFats = Math.round(dailyFats)
        dailyCarbs = Math.round(dailyCarbs)

        return {
            dailyCalories,
            dailyProteins,
            dailyFats,
            dailyCarbs
        }
    }

    const handleCalculate = () => {
        const macros = calculateMacros()

        console.log(macros)
        localStorage.setItem('dailyMacros', JSON.stringify(macros))

        const {age, weight, height, gender} = formData

        const humanParameters = {
            age,
            weight,
            height,
            gender
        }

        console.log(humanParameters);
        localStorage.setItem('humanParameters', JSON.stringify(humanParameters))
    }

    return (
        <div className='calculate-form'>
            <header className="header">
                <div className="header__info">
                    <h1 className="header__title">Personal data</h1>
                    <p className='header__text'>Enter your details to get accurate calories recommdendations</p>
                </div>

                <RouterLink to='/'>
                    <Button>
                        X
                    </Button>
                </RouterLink>
                
            </header>
            
            <section className='calculate-form__parameters'>

                <InputField
                label="Age"
                name="age"
                value={formData.age}
                suffix="y.o"
                type="number"
                onChange={handleChange}
                />
                
                <OptionCards
                value={formData.gender}
                optionCards={genderOptionCards}
                onChange={ (newValue) => updateFormData('gender', newValue) }
                
                
                />
                
                <InputField
                label="Height"
                name='height'
                value={formData.height}
                suffix="cm"
                type="number"
                onChange={handleChange}
                />
                

                <InputField
                label="Weight"
                name='weight'
                value={formData.weight}
                suffix="kg"
                type="number"
                onChange={handleChange}
                />
            </section>

            
            <section className='calculate-form__activity'>

                <OptionCards
                value={formData.activityCoefficient}
                optionCards={activeOptionCards}
                onChange={(newValue) => updateFormData('activityCoefficient', newValue)}
                />

            </section>

            <section className='calculate-form__goal'>
                
                <OptionCards 
                value={formData.goal}
                optionCards={goalOptionCards}
                onChange={(newValue) => updateFormData('goal', newValue)}
                />    
                
            </section >

            <section className='calculate-form__optional'>
                
                <CalculateFormOptional 
                formData={formData}
                updateFormData={updateFormData}
                handleChange={handleChange}
                />

            </section>

            <section className='calculate-form__buttons'>
                <Button
                className='calculate-form__reset-button'
                onClick={resetParameters}
                > 
                    Reset
                </Button>

                <Button
                className='calculate-form__calculate-button'
                onClick={handleCalculate}
                >
                    <Calculator /> 
                    Calculate calories
                </Button>
            </section>
        </div>
    )
}

export default CalculateForm