import { RoadmapItem } from '../../components/RoadmapItem'
import styles from './Roadmap.module.css'

export function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Roadmap</h1>
        <button className={styles.addButton}>+ New Item</button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🎯 Q1 2025</h2>
        <div className={styles.timeline}>
          <RoadmapItem
            title="Validate market fit"
            description="Interview 20 potential customers to validate the core problem"
            status="in-progress"
            dueDate="Jan 31"
          />
          <RoadmapItem
            title="Build MVP"
            description="Create basic version with core features"
            status="planned"
            dueDate="Feb 28"
          />
          <RoadmapItem
            title="Design pitch deck"
            description="Prepare presentation for potential investors"
            status="planned"
            dueDate="Mar 15"
            isLast
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>🚀 Q2 2025</h2>
        <div className={styles.timeline}>
          <RoadmapItem
            title="Beta launch"
            description="Release beta version to early users"
            status="planned"
            dueDate="Apr 30"
          />
          <RoadmapItem
            title="Fundraising round"
            description="Close seed round funding"
            status="planned"
            dueDate="May 31"
            isLast
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>✨ Done</h2>
        <div className={styles.timeline}>
          <RoadmapItem
            title="Research phase"
            description="Completed market research and trend analysis"
            status="done"
            dueDate="Dec 2024"
            isLast
          />
        </div>
      </div>
    </div>
  )
}
