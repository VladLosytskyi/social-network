import ReactDOM from 'react-dom'
import AppContainer from './AppContainer'

describe('App Component Test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
