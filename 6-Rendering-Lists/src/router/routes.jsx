import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import WelcomePage from '../pages/welcome.jsx'
import LoginPage from '../pages/login.jsx'
import RegisterPage from '../pages/register.jsx'
import ErrorPage from '../pages/error.jsx'
import ProductsPage from '../pages/products.jsx'

export const Routes = () => {
  const Router = createBrowserRouter([
    {
    path: '/',
    exact: true,
    element: <WelcomePage />,
    elementError: <ErrorPage/>
  },
  {
    path: '/user/register',
    element: <RegisterPage />,
    elementError: <ErrorPage/>
  },
  {
    path: '/user/login',
    element: <LoginPage />,
    elementError: <ErrorPage/>
    },
    {
      path: "/products",
      element: <ProductsPage />,
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  ])
  
  return (
    <RouterProvider router={Router}/>
  )
}