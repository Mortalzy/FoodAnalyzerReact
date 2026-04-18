import InputField from '../InputField/InputField'
import OptionCards from '../OptionCards/OptionCards'
import './CalculateForm.css'

const CalculateForm = () => {

    const genderOptionCards =  [
        {label: 'Male'},
        {label: 'Female'},
    ]

    const activeOptionCards = [
        {label: 'Sedentary', description: 'Little or no exercise'},
        {label: 'Light', description: '1-3 days/week'},
        {label: 'Moderate', description: '3-5 days/week'},
        {label: 'Active', description: '6-7 days/week'},
        {label: 'Very active', description: 'Hard training daily'},
    ]
Light
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
                <div className="activity__text-content">
                    <h2 className='activity__title'>Actiivity level</h2>
                    <p className='activity__text'>How active are you on a typical day?</p>
                </div>

                <OptionCards
                optionCards={activeOptionCards} 
                />

            </section>

            <section className='calculate-form__goal'>
                <div className="goal__text-content">
                    <h2 className="goal__title">Goal</h2>
                    <p className="goal__text">What is your main goal?</p>
                </div>

                <div className="goal__buttons">
                    
                </div>
            </section>
            

            



        </div>
    )
}

export default CalculateForm