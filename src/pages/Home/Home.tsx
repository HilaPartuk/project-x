import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>React + Vite Boilerplate</h1>
        <p className={styles.subtitle}>TypeScript · CSS Modules · Netlify-ready</p>
      </div>

      <div className={styles.grid}>
        <Card title="⚡ Vite">Fast dev server and optimized builds out of the box.</Card>
        <Card title="🔷 TypeScript">Full type safety across the entire project.</Card>
        <Card title="🎨 CSS Modules">Scoped styles — no class name collisions.</Card>
      </div>

      <div className={styles.actions}>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  )
}
