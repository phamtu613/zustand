import './App.css'
import Theme from './components/Theme'
import { themeStore } from './zustand/themeStore'

function App() {
  const { themeState } = themeStore()
  return (
    <div className='h-screen w-screen' style={{ background: themeState.bgColor }}>
      <Theme />
    </div>
  )
}

export default App
