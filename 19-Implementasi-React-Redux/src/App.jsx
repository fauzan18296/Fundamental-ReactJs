import { Routes } from "./router/routes"
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider> 
  )
}

export default App