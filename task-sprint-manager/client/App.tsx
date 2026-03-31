import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'

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
      <MainLayout onLogout={logout}>
        <Dashboard />
      </MainLayout>
    )
  }

  return view === 'login' ? (
    <Login onSwitch={() => setView('register')} onAuth={handleAuth} />
  ) : (
    <Register onSwitch={() => setView('login')} />
  )
}

export default App
