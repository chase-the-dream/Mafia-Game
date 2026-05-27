import cardBack from '../assets/card-back.png'

function GamePage() {
  const stored = localStorage.getItem('mafiaSetup')
  const data = stored ? JSON.parse(stored) : null
  
  function buildRoles(nmafia, ndetectives, ndoctor, ntownspeople) {
    const roles = []
    for (let i = 0; i < nmafia; i++) roles.push(1)        // mafia
    for (let i = 0; i < ndetectives; i++) roles.push(2)   // detective
    for (let i = 0; i < ndoctor; i++) roles.push(3)       // doctor
    for (let i = 0; i < ntownspeople; i++) roles.push(4)  // townspeople

    // Fisher-Yates shuffle
    for (let i = roles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = roles[i]
      roles[i] = roles[j]
      roles[j] = temp
    }

    return roles
  }

  // No data found

  if (!data) {
    return (
      <>
        <h1>Game Start</h1>
        <p>No setup data found. Go back to setup.</p>
      </>
    )
  }

  // We have ata

  const roles = buildRoles(data.nmafia, data.ndetectives, data.ndoctor, data.ntownspeople)

  return (
    <>
      <h1>Game Start</h1>
      <p>
        Mafia: {data.nmafia} | Townspeople: {data.ntownspeople} | Doctors: {data.ndoctor} | Detectives: {data.ndetectives}
        Roles: {roles}
      </p>
      <button type="button">
        <img src={cardBack} alt="Card Back" height="180px" width="auto"></img>
      </button>
    </>
  )
}

export default GamePage