/**
 * Scenario test for asyncPopulateLeaderboards thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import api from '../../utils/api'
import {
  asyncPopulateLeaderboards,
  receiveLeaderboardsActionCreator,
} from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'Socrates',
      email: 'socrates@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 25,
  },
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards
  })

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards
    delete api._getLeaderboards
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // Stub implementation
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)
    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncPopulateLeaderboards()(dispatch)

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    )
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = vi.fn()
    // mock alert
    window.alert = vi.fn()

    // action
    await asyncPopulateLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
