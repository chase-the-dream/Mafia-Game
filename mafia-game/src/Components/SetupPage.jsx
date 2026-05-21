function SetupPage() {
  return (
    <>
      <h1>
        Setup Page
      </h1>
      <form>
        <label htmlFor="nmafia"># Mafia:</label>
        <input type="number" id="nmafia" name="nmafia" min="1" max="10" step="1"></input>

        <label htmlFor="ntownspeople"># Townspeople:</label>
        <input type="number" id="ntownspeople" name="ntownspeople" min="1" max="10" step="1"></input>

        <label htmlFor="ndoctors"># Doctors:</label>
        <input type="number" id="ndoctor" name="ndoctor" min="0" max="10" step="1"></input>

        <label htmlFor="ndetectives"># Detectives:</label>
        <input type="number" id="ndetectives" name="ndetectives" min="0" max="10" step="1"></input>

        <button type="submit">Start</button>
      </form>
    </>
  )
}

export default SetupPage