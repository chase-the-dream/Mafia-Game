function GamePage() {
  const stored = localStorage.getItem('mafiaSetup')
  const data = stored ? JSON.parse(stored) : null

  return (
    <>
      <h1>Game Start</h1>
      {data ? (
        <p>
          Mafia: {data.nmafia} | Townspeople: {data.ntownspeople} | Doctors: {data.ndoctor} | Detectives: {data.ndetectives}
        </p>
      ) : (
        <p>No setup data found. Go back to setup.</p>
      )}
    </>
  )
}

export default GamePage