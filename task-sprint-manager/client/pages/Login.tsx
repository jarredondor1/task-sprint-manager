import { useState } from 'react'
import { loginUser } from '../services/api'
import '../src/styles/auth.css'

interface Props {
  onSwitch: () => void
  onAuth: (token: string) => void
}

export default function Login({ onSwitch, onAuth }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await loginUser({ email, password })

    if (res.token) {
      onAuth(res.token)
    } else {
      setError(res.message || 'Credenciales inválidas')
    }
  }

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <div className="auth-logo">TSM</div>
        <h1>Task & Sprint Manager</h1>
        <p>Organiza tu trabajo. Acelera tu entrega.</p>

        <ul className="auth-features">
          <li>Gestión de sprints ágiles</li>
          <li>Backlog priorizado</li>
          <li>Métricas en tiempo real</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-form">

          <div className="auth-mobile-logo">
            <div className="auth-logo">TSM</div>
          </div>
          <h2>Bienvenido de vuelta</h2>
          <div className="auth-subtitle">Ingresa tus credenciales</div>

          <form onSubmit={handleSubmit}>

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
              Iniciar sesión
            </button>

          </form>

          <div className="auth-link">
            ¿No tienes cuenta?{' '}
            <button onClick={onSwitch}>Regístrate</button>
          </div>
        </div>
      </div>

    </div>
  )
}
