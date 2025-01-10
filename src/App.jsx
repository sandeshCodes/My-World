
import Header from './components/Header'

import './index.css'
import Home from './Pages/Home'

function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-r flex justify-between from-custom-navy via-cyan-700 to-custom-cyan text-white ">
        <Header/>
        <Home/>
    </div>
  )
}

export default App
