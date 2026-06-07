import { ProtectedRoute } from './components/ProtectedRoute'
import { NavigationProvider } from './context/NavigationContext'
import { Home } from './pages/Home'

function App() {
  return (
    <ProtectedRoute>
      <NavigationProvider>
        <Home />
      </NavigationProvider>
    </ProtectedRoute>
  )
}

export default App
