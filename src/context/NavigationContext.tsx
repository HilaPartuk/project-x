import * as React from "react"
import { createContext, useState } from 'react'

export type Page = 'dashboard' | 'ideas' | 'vision-board' | 'roadmap'

interface NavigationContextType {
  currentPage: Page | null
  setCurrentPage: (page: Page) => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page | null>(null)

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = React.useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}
