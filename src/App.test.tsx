import * as ReactDOM from 'react-dom'
import AppContainer from './App'

describe('App Component Test', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
