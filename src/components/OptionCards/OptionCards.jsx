const OptionCards = (props) => {

    const {
        optionCards
    } = props

    

    return (
        <div className="option-cards">
            {optionCards.map(({label, description}) => {
                (
                    <button className="option-card">
                        <p className="option-card__label">{label}</p>
                        {description && <span className="option-card__description">{description}</span>}
                    </button>
                )
            })}
             
        </div>
       
    )
}

export default OptionCards