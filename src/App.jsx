// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import SetupPage from './Components/SetupPage'
import GamePage from './Components/GamePage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App