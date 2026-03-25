import { useState } from 'react'
import { loginUser } from '../services/api'

interface Props {
  onSwitch: () => void
  onAuth: (token: string) => void
}

function Login({ onSwitch, onAuth }: Props) {
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
      setError(res.message || 'Login failed')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        padding: '1rem'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#ffffff',
          padding: '2rem',
          borderRadius: 12,
          boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <h2 style={{ margin: 0, textAlign: 'center', color: '#0f172a' }}>
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 8,
            border: '1px solid #cbd5e1',
            fontSize: '0.95rem'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 8,
            border: '1px solid #cbd5e1',
            fontSize: '0.95rem'
          }}
        />

        <button
          type="submit"
          style={{
            padding: '0.8rem',
            borderRadius: 8,
            border: 'none',
            background: '#0f172a',
            color: '#ffffff',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Sign In
        </button>

        {error && (
          <p style={{ margin: 0, color: '#dc2626', fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        <p style={{ margin: 0, textAlign: 'center', fontSize: '0.9rem' }}>
          No account?{' '}
          <button
            type="button"
            onClick={onSwitch}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              cursor: 'pointer',
              fontWeight: 500
            }}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
