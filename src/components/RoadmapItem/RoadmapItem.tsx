import styles from './RoadmapItem.module.css'

interface RoadmapItemProps {
  title: string
  description: string
  status: 'planned' | 'in-progress' | 'done'
  dueDate?: string
  isLast?: boolean
}

const statusEmoji = {
  planned: '📋',
  'in-progress': '⚙️',
  done: '✅',
}

const statusLabel = {
  planned: 'Planned',
  'in-progress': 'In Progress',
  done: 'Done',
}

export function RoadmapItem({
  title,
  description,
  status,
  dueDate,
  isLast,
}: RoadmapItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <span className={styles.status}>
            {statusEmoji[status]} {statusLabel[status]}
          </span>
          {dueDate && <span>📅 {dueDate}</span>}
        </div>
      </div>
    </div>
  )
}
