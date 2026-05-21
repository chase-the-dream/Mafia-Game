function GamePage() {
  const stored = localStorage.getItem('mafiaSetup')
  const setup = stored ? JSON.parse(stored) : null

  return (
    <>
      <h1>Game Start</h1>
      {setup ? (
        <p>
          Mafia: {setup.nmafia} | Townspeople: {setup.ntownspeople} | Doctors: {setup.ndoctor} | Detectives: {setup.ndetectives}
        </p>
      ) : (
        <p>No setup data found. Go back to setup.</p>
      )}
    </>
  )
}

export default GamePage