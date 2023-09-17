import { WalletModalProps } from '@/features/wallet/components/wallet-modal'
import { ComponentType, lazy } from 'react'

export interface IDialogsLibrary {
  WalletModal: WalletModalProps
}

export const DialogsLibrary: Record<keyof IDialogsLibrary, any> = {
  WalletModal: lazy<ComponentType<WalletModalProps>>(() =>
    import('@/features/wallet/components/wallet-modal').then(
      ({ WalletModal }) => ({ default: WalletModal })
    )
  ),
}
