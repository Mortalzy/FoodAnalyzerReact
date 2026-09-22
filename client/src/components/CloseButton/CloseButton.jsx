import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';
import { X } from "lucide-react";
import './CloseButton.css'

const CloseButton = () => {
    const navigate = useNavigate()

    return (
        <Button onClick={() => {navigate('/')}}>
            <X
            size={30}
            />
        </Button>
        
    )
}

export default CloseButton