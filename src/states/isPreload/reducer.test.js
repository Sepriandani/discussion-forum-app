/**
 * Test scenario for isPreloadReducer function
 * - should set isPreload when ActionType.SET_IS_PRELOAD is dispatched
 * - should return current state for unknown action type
 */

import { describe, expect, it } from 'vitest'
import isPreloadReducer from './reducer'

describe('isPreloadReducer function', () => {
  it('should set isPreload when ActionType.SET_IS_PRELOAD is dispatched', () => {
    const initialState = true
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    }

    const newState = isPreloadReducer(initialState, action)

    expect(newState).toEqual(false)
  })

  it('should return current state for unknown action type', () => {
    const initialState = true
    const action = {
      type: 'UNKNOWN_ACTION',
    }

    const newState = isPreloadReducer(initialState, action)

    expect(newState).toEqual(initialState)
  })
})
