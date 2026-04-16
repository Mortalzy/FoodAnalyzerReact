import './HumanParameters.css'

const HumanParameters = (props) => {

    const {
        humanParameters,
    } = props

    const {age, weight, height, gender} = humanParameters

    return (
        <div className="human-parameters">
            <div className="human-parameter">
                <p className="human-parameters__title">Age</p>
                <p className="human-parameters__value">{age} y.o.</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Weight</p>
                <p className="human-parameters__value">{weight} kg</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Height</p>
                <p className="human-parameters__value">{height} cm</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Gender</p>
                <p className="human-parameters__value">{gender}</p>
            </div>
            
        </div>
    )
}

export default HumanParameters