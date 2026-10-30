import AppRoutes from './app/AppRoutes'
import LanguageSwitcher from './components/ui/LanguageSwitcher'

const App = () => {
  return (
    <div>
      <LanguageSwitcher />
      <AppRoutes />
    </div>
  )
}

export default App
