import { IdeaCard } from '../../components/IdeaCard'
import styles from './Dashboard.module.css'

export function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back, Hila 👋</h1>
        <p className={styles.subtitle}>Your entrepreneurial journey dashboard</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>12</p>
          <p className={styles.statLabel}>Total Ideas</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>3</p>
          <p className={styles.statLabel}>Vision Boards</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>7</p>
          <p className={styles.statLabel}>Roadmap Items</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>💡</span> Recent Ideas
        </h2>
        <div className={styles.recentIdeas}>
          <IdeaCard
            title="AI-powered tool for startup founders"
            description="A platform that helps founders validate ideas and connect with mentors"
            category="SaaS"
            date="Dec 15, 2024"
          />
          <IdeaCard
            title="Community marketplace for creators"
            description="Enable creators to sell digital products in a unified marketplace"
            category="Community"
            date="Dec 10, 2024"
          />
          <IdeaCard
            title="Personal brand audit tool"
            description="Quick assessment and recommendations for personal branding"
            category="Tools"
            date="Dec 5, 2024"
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>🎨</span> Upcoming Vision Items
        </h2>
        <div className={styles.emptyState}>
          <p>No vision items yet. Start adding inspiration to your board!</p>
        </div>
      </div>
    </div>
  )
}
