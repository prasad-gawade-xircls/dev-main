import { lazy } from 'react'
import Partner from '@src/views/main/partner/Partner'
import Test from '../../test/Test'
import { Developer } from '../../views/main/developer/Developer'
const Home = lazy(() => import('@src/views/main/home/Home'))


const Homes_Routes = [
  {
    path: '/',
    element: <Home />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/partner',
    element: <Partner />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/test',
    element: <Test />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/developer',
    element: <Developer />,
    meta: {
      layout: "blank"
    }
  }
]

export default Homes_Routes
