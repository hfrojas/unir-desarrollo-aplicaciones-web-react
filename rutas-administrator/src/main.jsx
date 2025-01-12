import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ApiRates from './pages/ApiRates'
import Principal from './components/Principal'
import AboutUs from './pages/AboutUs'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../public/css/blog.css'
import ApiTest from './components/ApiTest'
import ListCities from './components/ListCities'
import ListRoutes from './components/ListRoutes'
import SearchRouteByName from './components/SearchRouteByName'
import CreateRoute from './components/CreateRoute'
import DeleteRoute from './components/DeleteRoute'

const routerApp = createBrowserRouter(

  [
    {
      path: '/',
      element: <Principal />,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/prices',
          element: <ApiRates/>
        },
        {
          path: '/api-test',
          element: <ApiTest/>
        },
        {
          path: '/about-us',
          element: <AboutUs/>
        },
        {
          path: '/list-cities',
          element: <ListCities/>
        },
        {
          path: '/list-routes',
          element: <ListRoutes/>
        },
        {
          path: '/search-routes-ny-name',
          element: <SearchRouteByName/>
        },
        {
          path: '/search-routes-ny-name',
          element: <SearchRouteByName/>
        },
        {
          path: '/create-route',
          element: <CreateRoute/>
        },
        {
          path: '/delete-route',
          element: <DeleteRoute/>
        }

      ]
    }
  ]

);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerApp} ></RouterProvider>
  </StrictMode>,
)
