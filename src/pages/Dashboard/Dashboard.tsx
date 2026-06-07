import { IdeaCard } from '../../components/IdeaCard'
import styles from './Dashboard.module.css'

export function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>ברוכה חזרה, הילה 👋</h1>
        <p className={styles.subtitle}>מערכת ניהול של הסיפור היזמי שלך</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>12</p>
          <p className={styles.statLabel}>רעיונות בסך הכל</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>3</p>
          <p className={styles.statLabel}>לוחות השראה</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statNumber}>7</p>
          <p className={styles.statLabel}>נקודות דרך</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span>💡</span> רעיונות אחרונים
        </h2>
        <div className={styles.recentIdeas}>
          <IdeaCard
            title="כלי AI למייסדי סטארטאפ"
            description="פלטפורמה המסייעת למייסדים לאמת רעיונות ולהתחבר למנטורים"
            category="SaaS"
            date="15 בדצמבר, 2024"
          />
          <IdeaCard
            title="שוק קהילתי ליוצרים"
            description="אפשרות ליוצרים למכור מוצרים דיגיטליים בשוק אחוד"
            category="קהילה"
            date="10 בדצמבר, 2024"
          />
          <IdeaCard
            title="כלי בדיקת מותג אישי"
            description="הערכה מהירה והמלצות למיתוג אישי"
            category="כלים"
            date="5 בדצמבר, 2024"
          />
        </div>
      </div>
    </div>
  )
}
