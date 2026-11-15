import AppLayout from './components/AppLayout/AppLayout'
import AppRoutes from './components/AppRoutes/AppRoutes'
import {BrowserRouter} from 'react-router-dom'
import { FoodCardsProvider } from './context/FoodCardsContext'
import { MacrosContextProvider } from './context/MacrosContext'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <FoodCardsProvider>
        <MacrosContextProvider>
          <AppLayout>
           <AppRoutes />
          </AppLayout>
        </MacrosContextProvider>
      </FoodCardsProvider>
    </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App