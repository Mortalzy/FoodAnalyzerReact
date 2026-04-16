import {CalendarRange, Weight, Ruler, Users } from "lucide-react";

import './HumanParameters.css'

const HumanParameters = (props) => {

    const {
        humanParameters,
    } = props

    const {age, weight, height, gender} = humanParameters

    return (
        <div className="human-parameters">
            <div className="human-parameter">
                <div className='human-parameter__left'>
                    <div className="human-parameter__icon">
                        <CalendarRange size={20}/>
                    </div>
                    <p className="human-parameters__title">Age</p>
                </div>
                <p className="human-parameters__value">{age} y.o.</p>
            </div>

            <div className="human-parameter">
                <div className='human-parameter__left'>
                    <div className="human-parameter__icon">
                        <Weight size={20}/>
                    </div>
                    <p className="human-parameters__title">Weight</p>
                </div>
                
                <p className="human-parameters__value">{weight} kg</p>
            </div>

            <div className="human-parameter">
                <div className='human-parameter__left'>
                    <div className="human-parameter__icon">
                        <Ruler size={20}/>
                    </div>
                    <p className="human-parameters__title">Height</p>
                </div>
                <p className="human-parameters__value">{height} cm</p>
            </div>

            <div className="human-parameter">
                <div className='human-parameter__left'>
                    <div className="human-parameter__icon">
                        <Users size={20}/>
                    </div>
                    <p className="human-parameters__title">Gender</p>
                </div>
                <p className="human-parameters__value">{gender}</p>
            </div>
            
        </div>
    )
}

export default HumanParameters