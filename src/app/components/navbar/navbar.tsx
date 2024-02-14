
import NavItem from './ nav-item'
import styles from './navbar.module.css'

export type NavItems = {
  label: string
  value: string
  url: string
}

const navItems: NavItems[] = [
  {
    label: 'Home',
    value: 'home-page',
    url: '/',
  },
  {
    label: 'Live',
    value: 'live',
    url: '/live',
  },
  {
    label: 'Profile',
    value: 'profile',
    url: '/profile',
  },
]

export default function Navbar(){
  return (
    <div className={styles.stickyBottom}>
      <ul className={styles.navbarContainer}>
        {navItems.map((item, index) => (
          <li className={styles.navItemWrapper} key={`navitem-${index}`}>
            <NavItem
              label={item.label}
              value={item.value}
              url={item.url}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}