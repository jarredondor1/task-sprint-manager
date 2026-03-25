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
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        No account? <button type="button" onClick={onSwitch}>Register</button>
      </p>
    </form>
  )
}

export default Login
