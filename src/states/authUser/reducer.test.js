/**
 * Test scenario for authUserReducer function
 * - should set authUser when ActionType.SET_AUTH_USER is dispatched
 * - should unset authUser when ActionType.UNSET_AUTH_USER is dispatched
 * - should return current state for unknown action type
 */

import { describe, expect, it } from 'vitest'
import authUserReducer from './reducer'

describe('authUserReducer function', () => {
  it('should set authUser when ActionType.SET_AUTH_USER is dispatched', () => {
    const initialState = null
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    }

    const newState = authUserReducer(initialState, action)

    expect(newState).toEqual(action.payload.authUser)
  })

  it('should unset authUser when ActionType.UNSET_AUTH_USER is dispatched', () => {
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    }
    const action = {
      type: 'UNSET_AUTH_USER',
    }

    const newState = authUserReducer(initialState, action)

    expect(newState).toBeNull()
  })

  it('should return current state for unknown action type', () => {
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    }
    const action = {
      type: 'UNKNOWN_ACTION',
    }

    const newState = authUserReducer(initialState, action)

    expect(newState).toEqual(initialState)
  })
})
