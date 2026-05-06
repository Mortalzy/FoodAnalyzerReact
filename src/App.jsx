import Router from './Router'
import AppLayout from './components/AppLayout/AppLayout'
import AddFoodPage from './pages/AddFoodPage'
import CalculatePage from './pages/CalculatePage'
import MainPage from "./pages/MainPage"

const App = () => {
  const routes = {
    '/': MainPage,
    '/calculate': CalculatePage,
    '/add-food': AddFoodPage,
    '*': () => <div>404 Page not found</div>,
  }

  return (
    <AppLayout>
        <Router routes={routes}/>
    </AppLayout>
    
  )
}

export default App