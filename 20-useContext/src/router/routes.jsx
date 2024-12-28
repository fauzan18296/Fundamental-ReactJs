import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import WelcomePage from '../pages/welcome'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import ErrorPage from '../pages/error'
import ProductsPage from '../pages/products'
import ProfilePage from '../pages/profile'
import DetailProductPage from '../pages/detailProduct'

export const Router = createBrowserRouter([
    {
    path: '/',
    exact: true,
    element: <WelcomePage />,
    elementError: <ErrorPage/>
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    
    {
      path: '/profile',
      element: <ProfilePage />
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />
    },
  ])
export default RouterProvider