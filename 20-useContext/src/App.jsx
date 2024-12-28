import { Router } from './router/routes'
import RouterProvider from './router/routes'
import { Provider } from 'react-redux'
import DarkModeContextProvider from './context/DarkMode'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={ Router } />
      </DarkModeContextProvider>
    </Provider> 
  )
}

export default App