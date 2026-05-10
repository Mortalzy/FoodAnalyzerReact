import Button from '../Button/Button'
import RouterLink from '../RouterLink/RouterLink'
import { X } from "lucide-react";
import './CloseButton.css'

const CloseButton = () => {
    return (
        <RouterLink to='/'>
            <Button>
                <X
                size={30}
                />
            </Button>
        </RouterLink>
    )
}

export default CloseButton