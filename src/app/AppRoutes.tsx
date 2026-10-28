import { Route, Routes } from 'react-router-dom'

import { Cart, Catalog, Login, NotFound, ProductCard } from '@/pages'

import { ROUTES } from './routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.CATALOG} element={<Catalog />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.PRODUCT} element={<ProductCard />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
