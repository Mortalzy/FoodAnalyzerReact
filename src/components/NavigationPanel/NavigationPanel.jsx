import Button from '../Button/Button'
import RouterLink from '../RouterLink/RouterLink';
import { Calculator, Plus, User } from "lucide-react";

import './NavigationPanel.css'

const NavigationPanel = (props) => {

    const {
        colorButton
    } = props

    return (
        <nav className="navigation">
            <RouterLink to='/calculate'>
                <Button>
                    <div className='navigation__element'>
                        <Calculator 
                        className='navigation__icon'
                        size={30}
                        />
                        Calculate
                    </div>
                </Button>
            </RouterLink>
            
            <RouterLink to='/add-food'>
                <Button
                className='button__add'
                colorButton={colorButton}
                >
                    <Plus size={26}/>
                </Button>
            </RouterLink>
            
            <Button>
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