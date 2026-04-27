import Router from './Router'
import AppLayout from './components/AppLayout/AppLayout'
import CalculatePage from './pages/CalculatePage'
import MainPage from "./pages/MainPage"

const App = () => {
  const routes = {
    '/': MainPage,
    '/calculate': CalculatePage,
    '*': () => <div>404 Page not found</div>,
  }

  return (
    <AppLayout>
        <Router routes={routes}/>
    </AppLayout>
    
  )
}

export default App