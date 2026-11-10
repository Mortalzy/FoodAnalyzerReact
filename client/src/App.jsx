import AppLayout from './components/AppLayout/AppLayout'
import AppRoutes from './components/AppRoutes/AppRoutes'
import {BrowserRouter} from 'react-router-dom'
import { FoodCardsProvider } from './context/FoodCardsContext'
import { MacrosContextProvider } from './context/MacrosContext'

const App = () => {
  

  return (
    <BrowserRouter>
      <FoodCardsProvider>
        <MacrosContextProvider>
          <AppLayout>
           <AppRoutes />
          </AppLayout>
        </MacrosContextProvider>
      </FoodCardsProvider>
    </BrowserRouter>
  )
}

export default App