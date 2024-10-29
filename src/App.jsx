import logo from './logo.svg'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import Navigator from './components/Navigator'
import IntroducePage from './pages/IntroducePage'

function App() {
  return (
    <div className='App'>
      <Navigator />
      <WelcomePage />
      <IntroducePage />
    </div>
  )
}

export default App
