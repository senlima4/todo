import { Suspense } from 'react'
import { View, Router } from 'react-navi'

import routes from '@/routes'
import Layout from '@/components/Layout'

export default function App() {
  return (
    <Router routes={routes}>
      <Layout>
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </Layout>
    </Router>
  )
}
