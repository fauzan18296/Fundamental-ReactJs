import { Router } from './router/routes'
import RouterProvider from './router/routes'
import { Provider } from 'react-redux'
import DarkModeContextProvider from './context/DarkMode'
import { TotalPriceProvider } from "./context/TotalPriceContext"
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={ Router } />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider> 
  )
}

export default App