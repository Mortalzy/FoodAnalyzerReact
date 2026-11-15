import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';
import { Calculator, Plus, User } from "lucide-react";
import { ROUTES } from '../../constants'; 

import './NavigationPanel.css'

const NavigationPanel = (props) => {
    const navigate = useNavigate()

    const {
        colorButton
    } = props

    return (
        <nav className="navigation">
            <Button onClick={() => {navigate(ROUTES.CALCULATE)}}>
                <div className='navigation__element'>
                    <Calculator 
                    className='navigation__icon'
                    size={30}
                    />
                    Calculate
                </div>
            </Button>
            
            
            <Button onClick={() => {navigate(ROUTES.ADD_FOOD)}}
            className='button__add'
            colorButton={colorButton}
            >
                <Plus size={26}/>
            </Button>
            
            
            <Button onClick = {() => {navigate(ROUTES.PROFILE)}}>
                <div className='navigation__element'>
                    <User
                    className='navigation__icon'
                        size={28}
                    />
                    About
                </div>
            </Button>
        </nav>
    )
}

export default NavigationPanel