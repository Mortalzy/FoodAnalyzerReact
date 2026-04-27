import './OptionCards.css'

const OptionCards = (props) => {

    const {
        optionCards
    } = props

    const {label, description, cards} = optionCards

    return (
        <div className="option-cards">
            <label className='option-cards__label'>{label}</label>
            {description && <span className='option-cards__description'>{description}</span>}

            <div className="option-cards__cards">
                {cards.map( ({title, text, isActive}) => {
                return (
                    <button 
                    className={`option-card ${isActive ? 'is-active' : ''}`}>
                        <p className="option-card__title">{title}</p>
                        {text && <span className="option-card__text">{text}</span>}
                    </button>
                 )
                })}
            </div>
            
             
        </div>
       
    )
}

export default OptionCards