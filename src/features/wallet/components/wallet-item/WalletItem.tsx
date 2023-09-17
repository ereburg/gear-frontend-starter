import styles from './WalletItem.module.scss'
import { SVGComponent } from '@/app/types'

type Props = {
  icon: SVGComponent
  name: string
}

export function WalletItem({ icon: Icon, name }: Props) {
  return (
    <span className={styles.wallet}>
      <Icon className={styles.icon} />
      {name}
    </span>
  )
}
