import styles from './IdeaCard.module.css'

interface IdeaCardProps {
  title: string
  description: string
  category: string
  date: string
}

export function IdeaCard({ title, description, category, date }: IdeaCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.tag}>{category}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span>{date}</span>
      </div>
    </div>
  )
}
