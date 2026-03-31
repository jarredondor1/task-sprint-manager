import { useState } from 'react'
import { registerUser } from '../services/api'
import '../src/styles/auth.css'

interface Props {
  onSwitch: () => void
}

export default function Register({ onSwitch }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await registerUser({ name, email, password })

    if (!res.id) {
      setError(res.message || 'No se pudo crear la cuenta')
    }
  }

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <div className="auth-logo">TSM</div>
        <h1>Únete al equipo</h1>
        <p>
          Crea tu cuenta gratis y empieza a organizar tus proyectos
          de manera más clara, eficiente y profesional.
        </p>

        <ul className="auth-features">
          <li>Sprint planning simplificado</li>
          <li>Colaboración en tiempo real</li>
          <li>Reportes automáticos</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-form">

          <div className="auth-mobile-logo">
            <div className="auth-logo">TSM</div>
          </div>

          <h2>Crear cuenta</h2>
          <div className="auth-subtitle">
            Completa tus datos para comenzar
          </div>

          <form onSubmit={handleSubmit}>

            <div className="auth-field">
              <label>Nombre completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label>Correo electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label>Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div style={{ color: '#D55E00', marginBottom: 12 }}>
                ⚠ {error}
              </div>
            )}

            <button className="auth-button" type="submit">
              Crear cuenta
            </button>

          </form>

          <div className="auth-link">
            ¿Ya tienes cuenta?{' '}
            <button onClick={onSwitch}>Inicia sesión</button>
          </div>
        </div>
      </div>

    </div>
  )
}
