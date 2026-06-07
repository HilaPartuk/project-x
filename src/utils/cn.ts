/**
 * Merges class names, filtering out falsy values.
 * Usage: cn(styles.base, isActive && styles.active)
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
