import Button from '../Button/Button'
import './OptionCards.css'

const OptionCards = (props) => {

    const {
        optionCards,
        value,
        onChange
    } = props

    const {label, description, cards} = optionCards

    return (
        <div className="option-cards">
            <label className='option-cards__label'>{label}</label>
            {description && <span className='option-cards__description'>{description}</span>}

            <div className="option-cards__cards">
                {cards.map( ({title, text, value: cardValue}) => {
                return (
                    <Button 
                    className={`option-card ${value === cardValue ? 'is-active' : ''}`}
                    type="button"
                    key={cardValue}
                    onClick={() => onChange(cardValue)}
                    >
                        <p className="option-card__title">{title}</p>
                        {text && <span className="option-card__text">{text}</span>}
                    </Button>
                 )
                })}
            </div>
            
             
        </div>
       
    )
}

export default OptionCards