import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Cart, Catalog, Login, NotFound, ProductCard } from '@/pages'

import { ROUTES } from './routes'
import style from './style.module.scss'

const AppRoutes: FC = () => {
  return (
    <div className={style.layout}>
      <Header />

      <main className={style.main}>
        <Routes>
          <Route path={ROUTES.CATALOG} element={<Catalog />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.PRODUCT} element={<ProductCard />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default AppRoutes
