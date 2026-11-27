import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'

import LanguageSwitcher from '../LanguageSwitcher'
import { Theme } from '../Theme'
import { Container } from '../ui/Container'
import { Input } from '../ui/Input'
import style from './style.module.scss'

export const Header = () => {
  const { t } = useTranslation()

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(style.navLink, { [style.active]: isActive })

  return (
    <header className={style.header}>
      <Container className={style.inner}>
        <Link className={style.logo} to="/">
          Forma
        </Link>
        <nav className={style.nav}>
          <NavLink to="/" end className={getNavLinkClass}>
            {t('header.catalog')}
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            {t('header.about')}
          </NavLink>
        </nav>
        <Input variant="search" placeholder={t('header.search')} />
        <div className={style.action}>
          <LanguageSwitcher />

          <Theme />
          <NavLink to="/login" className={getNavLinkClass}>
            {t('header.login')}
          </NavLink>
          <Link className={style.bag} to="/cart">
            {t('header.cart')} · 0
          </Link>
        </div>
      </Container>
    </header>
  )
}
