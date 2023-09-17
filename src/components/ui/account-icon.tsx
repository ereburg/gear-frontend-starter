import { PolkadotIconProps, PolkadotIcon } from '@/features/polkadot-icon/'
import { BaseComponentProps } from '@/app/types'

type Props = BaseComponentProps &
  Omit<PolkadotIconProps, 'address'> & {
    address?: string
  }

export function AccountIcon({
  children,
  className,
  size = 20,
  address,
  ...rest
}: Props) {
  return (
    <>
      {address && (
        <PolkadotIcon
          address={address}
          size={size}
          className={className}
          {...rest}
        />
      )}
    </>
  )
}
