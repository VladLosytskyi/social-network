import { create } from 'react-test-renderer'
import Paginator from './Paginator'

describe('Paginator Component Test', () => {
  test('there are 11 pages, but only 10 should be showed', () => {
    const component = create(<Paginator totalItemsCount={ 11 } pageSize={ 1 } portionSize={ 10 } />)
    const root = component.root
    const spans = root.findAllByType('span')
    expect(spans.length).toBe(10)
  })

  test('if pages count is more then 10 button NEXT should be', () => {
    const component = create(<Paginator totalItemsCount={ 11 } pageSize={ 1 } portionSize={ 10 } />)
    const root = component.root
    const button = root.findAllByType('button')
    expect(button.length).toBe(1)
  })
})
