import styles from './ProtectedRoute.module.css'
import { useAuth } from '../../hooks/useAuth'
import { GoogleLogin } from '@react-oauth/google'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, login, logout, error } = useAuth()

  if (user) {
    return (
      <>
        <button className={styles.logout} onClick={logout}>
          <img src={user.picture} alt={user.name} className={styles.avatar} />
          התנתקי
        </button>
        {children}
      </>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.lock}>🔒</div>
        <h1 className={styles.title}>גישה מוגבלת</h1>
        <p className={styles.subtitle}>האתר נגיש למשתמש מורשה בלבד</p>
        {error && <p className={styles.error}>{error}</p>}
        <GoogleLogin
          onSuccess={login}
          onError={() => {}}
          useOneTap
        />
      </div>
    </div>
  )
}
