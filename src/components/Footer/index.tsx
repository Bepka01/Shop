import { Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import style from './style.module.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <Container className={style.inner}>
        <span className={style.brand}>forma / {t('footer.brand')}</span>
      </Container>
    </footer>
  )
}
