import { useState } from 'react'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@/components/ui/button'
import styles from './Wallet.module.scss'
import { WalletIcon } from '../wallet-icon'
import { DialogsLibrary } from '@/components/dialogs'
import clsx from 'clsx'
import { VaraBalance } from '@/components/ui/balance'
import { useAccountAvailableBalance } from '@/features/account-available-balance/hooks'
import { useIsAppReady } from '@/app/hooks/use-is-app-ready'
import { BaseComponentProps } from '@/app/types'

export function Wallet({ className }: BaseComponentProps) {
  const [open, setOpen] = useState(false)

  const { account } = useAccount()
  const { isAppReady } = useIsAppReady()
  const { availableBalance: balance } = useAccountAvailableBalance()

  const isSigned = isAppReady && !!account

  return (
    <>
      <div className={clsx(styles.wrapper, className)}>
        {isSigned && (
          <VaraBalance
            value={balance?.value || '0'}
            unit={balance?.unit}
            className={styles.balance}
          />
        )}
        <Button
          variant={isSigned ? 'black' : 'primary'}
          className={styles.button}
          disabled={!isAppReady}
          onClick={() => setOpen(true)}
        >
          {isSigned && (
            <WalletIcon
              address={account.address}
              size={16}
              className={styles.icon}
            />
          )}
          <span>{isSigned ? account.meta.name : 'Connect Wallet'}</span>
        </Button>
      </div>
      <DialogsLibrary.WalletModal open={open} setOpen={setOpen} />
    </>
  )
}
