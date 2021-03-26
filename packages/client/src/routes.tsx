import { mount, lazy } from 'navi'

const routes = mount({
  '/': lazy(() => import('./pages/Dashboard')),
  '/login': lazy(() => import('./pages/Login')),
  '/register': lazy(() => import('./pages/Register')),
})

export default routes
