import './Profile.css'
import { useAuth } from '../../context/AuthContext'
import Button from '../Button/Button'

const Profile = () => {
    const {user, logout} = useAuth()
    const {name, second_name, email} = user
    console.log(user);

    const handleLogout = () => {
        const isConfirm = confirm("Are you sure log out?")

        if (isConfirm) logout()
        
    }
    
    return (
        <div className='profile'>
            <h1 className="profile__title">My Profile</h1>
            <p className="profile__name">Name: {name}</p>
            <p className="profile__name">Second name: {second_name}</p>
            <p className="profile__name">Email: {email}</p>
            <Button onClick={handleLogout}>Выйти из профиля</Button>
        </div>
    )
}

export default Profile