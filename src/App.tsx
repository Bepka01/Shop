import type { FC } from 'react'

import AppRoutes from './app/AppRoutes'
import LanguageSwitcher from './components/ui/LanguageSwitcher'

const App: FC = () => {
  return (
    <div>
      <LanguageSwitcher />
      <AppRoutes />
    </div>
  )
}

export default App
