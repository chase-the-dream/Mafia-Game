import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">Mafia</h1>
        <p className="home-subtitle">Shuffle the roles, bluff the table, survive the night.</p>
        <button className="home-play" onClick={() => navigate('/setup')}>
          Play
        </button>
      </div>
    </div>
  )
}

export default HomePage
