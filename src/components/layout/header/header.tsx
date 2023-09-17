import { Logo } from './logo'
import styles from './header.module.scss'
import { Container } from '@/components/ui/container'
import { Wallet } from '@/features/wallet'

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Logo className={styles.header__logo} name="App name" />
        <div className={styles.header__wallet}>
          <Wallet className={styles.wallet} />
        </div>
      </Container>
    </header>
  )
}
