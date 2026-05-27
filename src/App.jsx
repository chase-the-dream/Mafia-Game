// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import SetupPage from './Components/SetupPage'
import GamePage from './Components/GamePage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App