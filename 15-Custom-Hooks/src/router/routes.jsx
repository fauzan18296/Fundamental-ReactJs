import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import WelcomePage from '../pages/welcome.jsx'
import LoginPage from '../pages/login.jsx'
import RegisterPage from '../pages/register.jsx'
import ErrorPage from '../pages/error.jsx'
import ProductsPage from '../pages/products.jsx'
import ProfilePage from '../pages/profile.jsx'

export const Routes = () => {
  const Router = createBrowserRouter([
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
    }
  ])
  
  return (
    <RouterProvider router={Router}/>
  )
}