import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

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
    return <Dashboard onLogout={logout} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center">Task & Sprint Manager</h1>
        {view === 'login' ? (
          <Login onSwitch={() => setView('register')} onAuth={handleAuth} />
        ) : (
          <Register onSwitch={() => setView('login')} />
        )}
      </div>
    </div>
  )
}

export default App
