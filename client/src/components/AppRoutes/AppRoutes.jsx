import {Routes, Route} from 'react-router-dom'

import MainPage from '../../pages/MainPage.jsx'
import CalculatePage from '../../pages/CalculatePage.jsx'
import AddFoodPage from '../../pages/AddFoodPage.jsx'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/calculate' element={<CalculatePage/>}/>
            <Route path='/add-food' element={<AddFoodPage/>}/>
            <Route path='/profile' element={<MainPage/>}/>
        </Routes>
        
    )
}

export default AppRoutes