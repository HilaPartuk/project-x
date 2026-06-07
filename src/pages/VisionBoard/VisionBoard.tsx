import { useState } from 'react'
import styles from './VisionBoard.module.css'

interface VisionItem {
  id: string
  emoji: string
}

export function VisionBoard() {
  const [items] = useState<VisionItem[]>([
    { id: '1', emoji: '🚀' },
    { id: '2', emoji: '💡' },
    { id: '3', emoji: '🎯' },
  ])

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Vision Board</h1>
        <button className={styles.uploadButton}>+ Add Image</button>
      </div>

      {items.length > 0 ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.imageCard}>
              <div className={styles.placeholder}>{item.emoji}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🎨</div>
          <p className={styles.emptyText}>
            Add images and inspiration to your vision board
          </p>
          <button className={styles.uploadButton}>Upload First Image</button>
        </div>
      )}
    </div>
  )
}
