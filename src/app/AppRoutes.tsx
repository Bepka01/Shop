import { useTranslation } from 'react-i18next'
import { Link, Route, Routes } from 'react-router-dom'

import { Cart, Catalog, Login, NotFound, ProductCard } from '@/pages'

import { ROUTES } from './routes'

const AppRoutes = () => {
  const { t } = useTranslation()

  return (
    <>
      <nav>
        <Link to={ROUTES.CATALOG}>{t('header.catalog')}</Link>
        {' | '}
        <Link to={ROUTES.CART}>{t('header.cart')}</Link>
        {' | '}
        <Link to={ROUTES.LOGIN}>{t('header.login')}</Link>
        {' | '}
        <Link to="/products/1">{t('product.title')}</Link>
      </nav>

      <Routes>
        <Route path={ROUTES.CATALOG} element={<Catalog />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.PRODUCT} element={<ProductCard />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
