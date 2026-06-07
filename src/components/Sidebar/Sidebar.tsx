import { useNavigation, type Page } from '../../context/NavigationContext'
import styles from './Sidebar.module.css'

interface NavItemConfig {
  id: Page
  label: string
  icon: string
}

const navItems: NavItemConfig[] = [
  { id: 'dashboard', label: 'דשבורד', icon: '📊' },
  { id: 'ideas', label: 'רעיונות', icon: '💡' },
  { id: 'vision-board', label: 'לוח השראה', icon: '🎨' },
  { id: 'roadmap', label: 'מפת דרכים', icon: '🗺️' },
]

export function Sidebar() {
  const { currentPage, setCurrentPage } = useNavigation()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>CinematiX 🎬</h1>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${currentPage === item.id ? styles.active : ''}`}
            onClick={() => setCurrentPage(item.id)}
          >
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className={styles.footer}>
        <p>Built with 🚀 & ☕</p>
      </div>
    </aside>
  )
}
