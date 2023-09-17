import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import styles from './logo.module.scss'
import { ROUTES } from '@/app/consts'
import { TextGradient } from '@/components/ui/text-gradient'
import type { BaseComponentProps } from '@/app/types'
import { Sprite } from '@/components/ui/sprite'

type LogoProps = BaseComponentProps & {
  name?: string
}

export function Logo({ className, name }: LogoProps) {
  return (
    <NavLink
      to={ROUTES.HOME}
      className={({ isActive }) =>
        clsx(styles.link, isActive && styles.active, className)
      }
    >
      <Sprite name="vara-logo" width={92} height={60} className={styles.logo} />
      {name && <TextGradient className={styles.title}>{name}</TextGradient>}
    </NavLink>
  )
}
