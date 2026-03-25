import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [view, setView] = useState<'login' | 'register'>('login')
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('token')
    if (stored) setToken(stored)
  }, [])

  const handleAuth = (jwt: string) => {
    localStorage.setItem('token', jwt)
    setToken(jwt)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  if (token) {
    return (
      <div style={{ padding: 40, fontFamily: 'Arial' }}>
        <h1>Dashboard</h1>
        <p>Authenticated ✅</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Task & Sprint Manager</h1>
      {view === 'login' ? (
        <Login onSwitch={() => setView('register')} onAuth={handleAuth} />
      ) : (
        <Register onSwitch={() => setView('login')} />
      )}
    </div>
  )
}

export default App
