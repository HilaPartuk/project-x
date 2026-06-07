import { useState } from 'react'
import type { CredentialResponse } from '@react-oauth/google'

const ALLOWED_EMAIL = 'hila.partuk@gmail.com'

interface GoogleUser {
  email: string
  name: string
  picture: string
}

function parseJwt(token: string): GoogleUser {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(atob(base64))
}

export function useAuth() {
  const [user, setUser] = useState<GoogleUser | null>(() => {
    try {
      const saved = sessionStorage.getItem('auth_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })
  const [error, setError] = useState<string | null>(null)

  const login = (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) throw new Error('No credential')
      const decoded = parseJwt(credentialResponse.credential)

      if (decoded.email !== ALLOWED_EMAIL) {
        setError(`הגישה מוגבלת. ${decoded.email} אינו מורשה.`)
        return
      }

      setUser(decoded)
      setError(null)
      sessionStorage.setItem('auth_user', JSON.stringify(decoded))
    } catch {
      setError('שגיאה בהתחברות, נסי שוב.')
    }
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('auth_user')
  }

  return { user, login, logout, error }
}
