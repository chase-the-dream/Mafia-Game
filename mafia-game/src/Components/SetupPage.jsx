// SetupPage.jsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SetupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nmafia: 1,
    ntownspeople: 1,
    ndoctor: 0,
    ndetectives: 0,
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: Number(value) }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('mafiaSetup', JSON.stringify(form))
    navigate('/game')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nmafia"># Mafia:</label>
      <input id="nmafia" name="nmafia" type="number" min="1" max="10" step="1" value={form.nmafia} onChange={handleChange} />

      <label htmlFor="ntownspeople"># Townspeople:</label>
      <input id="ntownspeople" name="ntownspeople" type="number" min="1" max="10" step="1" value={form.ntownspeople} onChange={handleChange} />

      <label htmlFor="ndoctor"># Doctors:</label>
      <input id="ndoctor" name="ndoctor" type="number" min="0" max="10" step="1" value={form.ndoctor} onChange={handleChange} />

      <label htmlFor="ndetectives"># Detectives:</label>
      <input id="ndetectives" name="ndetectives" type="number" min="0" max="10" step="1" value={form.ndetectives} onChange={handleChange} />

      <button type="submit">Start</button>
    </form>
  )
}

export default SetupPage