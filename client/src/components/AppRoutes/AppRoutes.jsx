import {Routes, Route} from 'react-router-dom'

import MainPage from '../../pages/MainPage.jsx'
import CalculatePage from '../../pages/CalculatePage.jsx'
import AddFoodPage from '../../pages/AddFoodPage.jsx'
import ProfilePage from '../../pages/ProfilePage.jsx'
import AuthPage from '../../pages/AuthPage.jsx'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx'
import { ROUTES } from '../../constants/index.js'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN} element={<MainPage/>}/>
            <Route path={ROUTES.CALCULATE} element={<CalculatePage/>}/>
            <Route path={ROUTES.ADD_FOOD} element={<AddFoodPage/>}/>
            <Route path={ROUTES.AUTH} element={<AuthPage/>}/>
            <Route path={ROUTES.PROFILE} 
            element={
                <ProtectedRoute>
                    <ProfilePage/>
                </ProtectedRoute> 
            }/>
        </Routes>
        
        
    )
}

export default AppRoutes