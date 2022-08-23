import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/store'

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

export default AppContainer