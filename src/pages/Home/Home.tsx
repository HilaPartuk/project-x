import { useNavigation } from '../../context/NavigationContext'
import { Logo } from '../../components/Logo'
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
      <div className={styles.innerLayout}>
        <nav className={styles.topBar}>
          <Logo />
          <div className={styles.navLinks}>
            <button 
              className={styles.navLink}
              onClick={() => setCurrentPage('ideas')}
            >
              Ideas
            </button>
            <button 
              className={styles.navLink}
              onClick={() => setCurrentPage('vision-board')}
            >
              Inspiration
            </button>
            <button 
              className={styles.navLink}
              onClick={() => setCurrentPage('roadmap')}
            >
              Roadmap
            </button>
          </div>
        </nav>
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
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      
      <nav className={styles.heroTopBar}>
        <Logo />
        <div className={styles.heroNavLinks}>
          <button className={styles.heroNavLink}>Ideas</button>
          <button className={styles.heroNavLink}>Inspiration</button>
          <button className={styles.heroNavLink}>Roadmap</button>
        </div>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Turn your <span>vision</span> into <span>reality</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your personal operating system for entrepreneurship. Capture ideas, organize inspiration, and execute your dreams with intention.
          </p>
          <div className={styles.ctaGroup}>
            <button 
              className={styles.ctaPrimary}
              onClick={() => setCurrentPage('dashboard')}
            >
              Start Building
            </button>
            <button 
              className={styles.ctaSecondary}
              onClick={() => setCurrentPage('ideas')}
            >
              Explore Ideas
            </button>
          </div>
          
          <div className={styles.statsPreview}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Active Ideas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Vision Boards</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Focus</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Explore your journey</span>
        <span className={styles.scrollIcon}>↓</span>
      </div>
    </section>
  )
}
