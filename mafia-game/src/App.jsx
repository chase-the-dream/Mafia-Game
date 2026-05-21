// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import SetupPage from './Components/SetupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App