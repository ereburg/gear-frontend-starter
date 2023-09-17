import styles from './footer.module.scss'
import { Socials } from './socials'
import { Copyright } from './copyright'
import { Container } from '@/components/ui/container'
import { Sprite } from '@/components/ui/sprite'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <Sprite name="vara-logo" className={styles.footer__logo} />

        <Copyright className={styles.footer__copyright} />

        <Socials className={styles.footer__socials} />
      </Container>
    </footer>
  )
}
