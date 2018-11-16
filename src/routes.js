import App from './App'
import GraphicscardsPage from './components/GraphicscardsPage'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: GraphicscardsPage
      }
    ]
  }
]

export default routes
