import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus Component Test', () => {
  test('after creation span should be displayed', () => {
    const component = create(<ProfileStatus initialStatus="Test" updateStatus={ () => {} } isOwner={ true } />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('after creation input shouldn\'t be displayed', () => {
    const component = create(<ProfileStatus initialStatus="Test" updateStatus={ () => {} } isOwner={ true } />)
    const root = component.root
    expect(() => {
      root.findByType('input')
    }).toThrow()
  })
})
