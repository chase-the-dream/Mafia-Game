// SetupPage.jsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './SetupPage.css'

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
    <div className="setup-page">
      <div className="setup-card">
        <h1 className="setup-title">Set the Table</h1>
        <form className="setup-form" onSubmit={handleSubmit}>
          <label className="setup-field" htmlFor="nmafia">
            # Mafia:
            <input className="setup-input" id="nmafia" name="nmafia" type="number" min="1" max="10" step="1" value={form.nmafia} onChange={handleChange} />
          </label>

          <label className="setup-field" htmlFor="ntownspeople">
            # Townspeople:
            <input className="setup-input" id="ntownspeople" name="ntownspeople" type="number" min="1" max="10" step="1" value={form.ntownspeople} onChange={handleChange} />
          </label>

          <label className="setup-field" htmlFor="ndoctor">
            # Doctors:
            <input className="setup-input" id="ndoctor" name="ndoctor" type="number" min="0" max="10" step="1" value={form.ndoctor} onChange={handleChange} />
          </label>

          <label className="setup-field" htmlFor="ndetectives">
            # Detectives:
            <input className="setup-input" id="ndetectives" name="ndetectives" type="number" min="0" max="10" step="1" value={form.ndetectives} onChange={handleChange} />
          </label>

          <button className="setup-submit" type="submit">Start</button>
        </form>
      </div>
    </div>
  )
}

export default SetupPage