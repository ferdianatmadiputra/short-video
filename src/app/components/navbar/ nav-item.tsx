'use client'

import Link from 'next/link'
import styles from './nav-item.module.css'
import { NavItems } from './navbar'
import { usePathname } from 'next/navigation'

export default function NavItem({ label, value, url }: NavItems) {
  const params = usePathname()
  let isActive = params.includes(value)
  if (value === '/') {
    isActive = params === value
  }
  const color: string = isActive ? styles.activeIcon : styles.inactiveIcon

  return (
    <Link href={url} className={styles.navItemContainer}>
      <div className={color}>{label}</div>
    </Link>
  )

}
