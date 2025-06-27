import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Viewer from './pages/Viewer'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewer" element={<Viewer />} />
    </Routes>
  )
}

export default App
