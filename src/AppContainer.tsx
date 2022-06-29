import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import store from './redux/store'

const AppContainer = () => {
  return (
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  )
}

export default AppContainer