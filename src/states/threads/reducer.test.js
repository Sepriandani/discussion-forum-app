/**
 * Test scenario for threadsReducer functioon
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREADS action
 * - should return new thread when given by ADD_THREAD action
 * - should return the thread with toggle UpVote when given by UP_VOTE_THREAD action
 * - should return the thread with toggle DownVote when given by DOWN_VOTE_THREAD action
 */

import { describe, expect, it } from 'vitest'
import threadsReducer from './reducer'

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = []
    const action = { type: 'UNKNOW' }

    // Action
    const nextState = threadsReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // Arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Test 1',
            body: 'Ini cuma test',
            category: 'test',
            createdAt: '2024-01-10T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    }

    // Action
    const nextState = threadsReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return new thread when given by ADD_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Test 1',
        body: 'Ini cuma test',
        category: 'test',
        createdAt: '2024-01-10T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ]
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Test 2',
          body: 'Ini cuma test',
          category: 'test',
          createdAt: '2024-01-11T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    }

    // Action
    const nextState = threadsReducer(initialState, action)

    // Assert
    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })

  it('should return the thread with toggle UpVote when given by UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Test 1',
        body: 'Ini cuma test',
        category: 'test',
        createdAt: '2024-01-10T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ]
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadsReducer(initialState, action)

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ])
  })

  it('should return the thread with toggle DownVote when given by DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Test 1',
        body: 'Ini cuma test',
        category: 'test',
        createdAt: '2024-01-10T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ]
    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadsReducer(initialState, action)

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ])
  })
})
