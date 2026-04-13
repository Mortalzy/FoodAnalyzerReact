import './HumanParameters.css'

const HumanParameters = () => {
    return (
        <div className="human-parameters">
            <div className="human-parameter">
                <p className="human-parameters__title">Age</p>
                <p className="human-parameters__value">17.05.2005</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Weight</p>
                <p className="human-parameters__value">65 kg</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Height</p>
                <p className="human-parameters__value">177 cm</p>
            </div>

            <div className="human-parameter">
                <p className="human-parameters__title">Gender</p>
                <p className="human-parameters__value">Male</p>
            </div>
            
        </div>
    )
}

export default HumanParameters