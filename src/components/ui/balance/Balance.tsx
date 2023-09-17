import styles from './Balance.module.scss'
import clsx from 'clsx'
import type { BaseComponentProps } from '@/app/types'
import { Sprite } from '@/components/ui/sprite'

type Props = BaseComponentProps & {
  icon: string
  value: string
  unit?: string
}

type HOCProps = Omit<Props, 'icon' | 'children'>

function Balance({ icon, value, unit, className }: Props) {
  return (
    <span className={clsx(styles.wrapper, className)}>
      <Sprite name={icon} width={24} height={24} />

      <span className={styles.balance}>
        <b className={styles.amount}>{value}</b>
        {unit && <span className={styles.unit}>{unit}</span>}
      </span>
    </span>
  )
}

function VaraBalance({ value, unit, className }: HOCProps) {
  return (
    <Balance
      icon={unit?.toLowerCase() === 'vara' ? 'vara-coin' : 'tvara-coin'}
      value={value}
      unit={unit}
      className={className}
    />
  )
}

function PointsBalance({ value, unit = 'PPV', className }: HOCProps) {
  return (
    <Balance
      icon={'points-coin'}
      value={value}
      unit={unit}
      className={className}
    />
  )
}

export { VaraBalance, PointsBalance }
