import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus Component Test', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="Test" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('Test')
  })

  test('after creation span should be displayed', () => {
    const component = create(<ProfileStatus status="Test" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('after creation input shouldn\'t be displayed', () => {
    const component = create(<ProfileStatus status="Test" />)
    const root = component.root
    expect(() => {
      root.findByType('input')
    }).toThrow()
  })

  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="Test" updateStatus={ mockCallback } />)
    const instance = component.getInstance()
    instance.discardChanges()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
