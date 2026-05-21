import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

  return (
    <>
      <h1>
        Mafia
      </h1>
      <button onClick={() => navigate('/setup')}>
        Play
      </button>
      
    </>
  )
}

export default HomePage
