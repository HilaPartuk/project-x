import { useNavigation } from '../../context/NavigationContext'
import { Sidebar } from '../../components/Sidebar'
import { Dashboard } from '../Dashboard'
import { Ideas } from '../Ideas'
import { VisionBoard } from '../VisionBoard'
import { Roadmap } from '../Roadmap'
import styles from './Home.module.css'

export function Home() {
  const { currentPage, setCurrentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'ideas':
        return <Ideas />
      case 'vision-board':
        return <VisionBoard />
      case 'roadmap':
        return <Roadmap />
      default:
        return null
    }
  }

  if (currentPage === 'dashboard' || currentPage === 'ideas' || currentPage === 'vision-board' || currentPage === 'roadmap') {
    return (
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>
          {renderPage()}
        </main>
      </div>
    )
  }

  return <HeroSection setCurrentPage={setCurrentPage} />
}

interface HeroSectionProps {
  setCurrentPage: (page: 'dashboard' | 'ideas' | 'vision-board' | 'roadmap') => void
}

function HeroSection({ setCurrentPage }: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} />
      
      <div className={styles.heroContent}>
        <div className={styles.topBar}>
          <h1 className={styles.logo}>CinematiX 🎬</h1>
          <div className={styles.navButtons}>
            <button 
              className={styles.navButton}
              onClick={() => setCurrentPage('ideas')}
            >
              Explore Ideas
            </button>
            <button 
              className={styles.navButton}
              onClick={() => setCurrentPage('vision-board')}
            >
              Vision Board
            </button>
            <button 
              className={styles.navButton}
              onClick={() => setCurrentPage('roadmap')}
            >
              Roadmap
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>
              Build lasting ideas, one day at a time
            </h2>
            <p className={styles.heroSubtitle}>
              CinematiX is your personal gateway to entrepreneurship. Capture inspiration, organize your vision, and execute your dreams.
            </p>
            <button 
              className={styles.ctaButton}
              onClick={() => setCurrentPage('dashboard')}
            >
              Get Started ➜
            </button>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <span className={styles.scrollIcon}>↓</span>
        </div>
      </div>
    </section>
  )
}
