import Button from '../Button/Button'

import './NavigationPanel.css'

const NavigationPanel = () => {
    return (
        <div className="navigation">
            <Button>Calculate</Button>
            <Button
            className='button__add'
            >+</Button>
            <Button>About</Button>
        </div>
    )
}

export default NavigationPanel