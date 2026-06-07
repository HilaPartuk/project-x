import { useNavigation } from '../../context/NavigationContext'
import { Sidebar } from '../../components/Sidebar'
import { Dashboard } from '../Dashboard'
import { Ideas } from '../Ideas'
import { VisionBoard } from '../VisionBoard'
import { Roadmap } from '../Roadmap'
import styles from './Home.module.css'

export function Home() {
  const { currentPage } = useNavigation()

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
        return <Dashboard />
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        {renderPage()}
      </main>
    </div>
  )
}
