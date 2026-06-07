import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'

function App() {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  )
}

export default App
