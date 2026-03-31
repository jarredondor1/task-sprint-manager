// Backend runs on port 4000 in development
const API_URL = 'http://localhost:4000/api'

export const registerUser = async (data: {
  email: string
  password: string
  name?: string
}) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const error = await res.json().catch(() => null)
      return { message: error?.message || 'Registration failed' }
    }

    return res.json()
  } catch (err) {
    return { message: 'Cannot connect to server' }
  }
}

export const loginUser = async (data: {
  email: string
  password: string
}) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const error = await res.json().catch(() => null)
      return { message: error?.message || 'Login failed' }
    }

    return res.json()
  } catch (err) {
    return { message: 'Cannot connect to server' }
  }
}
