import { useState } from 'react'
import { IdeaCard } from '../../components/IdeaCard'
import styles from './Ideas.module.css'

const sampleIdeas = [
  {
    title: "AI-powered tool for startup founders",
    description: "A platform that helps founders validate ideas and connect with mentors",
    category: "SaaS",
    date: "Dec 15, 2024"
  },
  {
    title: "Community marketplace for creators",
    description: "Enable creators to sell digital products in a unified marketplace",
    category: "Community",
    date: "Dec 10, 2024"
  },
  {
    title: "Personal brand audit tool",
    description: "Quick assessment and recommendations for personal branding",
    category: "Tools",
    date: "Dec 5, 2024"
  },
  {
    title: "Educational platform for digital skills",
    description: "Interactive courses with real-world projects",
    category: "EdTech",
    date: "Nov 28, 2024"
  },
]

const categories = ['All', 'SaaS', 'Community', 'Tools', 'EdTech']

export function Ideas() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = selectedCategory === 'All'
    ? sampleIdeas
    : sampleIdeas.filter(idea => idea.category === selectedCategory)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Ideas</h1>
        <button className={styles.addButton}>+ New Idea</button>
      </div>

      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filter} ${selectedCategory === cat ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((idea, idx) => (
          <IdeaCard
            key={idx}
            title={idea.title}
            description={idea.description}
            category={idea.category}
            date={idea.date}
          />
        ))}
      </div>
    </div>
  )
}
