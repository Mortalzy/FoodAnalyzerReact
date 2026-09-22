import AppLayout from './components/AppLayout/AppLayout'
import AppRoutes from './components/AppRoutes/AppRoutes'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  

  return (
    <BrowserRouter>
      <AppLayout>
          <AppRoutes />
      </AppLayout>
    </BrowserRouter>
     
    
    
    
  )
}

export default App