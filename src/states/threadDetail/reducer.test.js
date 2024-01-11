/**
 * Test scenario for threadDetailReducer function
 * - should return the initial state when given by unknow action
 * - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 * - should return the thread detail with toggled upVote when given by UP_VOTE_THREAD_DETAIL action
 * - should return the thread detail with toggled downVote when given by DOWN_VOTE_THREAD_DETAIL action
 * - should return the thread detail with new comment when given by CREATE_COMMENT action
 * - should return the thread detail with toggle upVote comment when given by UP_VOTE_COMMENT action
 * - should return the thread detail with toggle downVote comment when given by DOWN_VOTE_COMMENT action
 */

import { describe, expect, it } from 'vitest'
import threadDetailReducer from './reducer'

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknow action', () => {
    // Arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Test 1',
          body: 'Ini cuma test',
          category: 'test',
          createdAt: '2024-01-10T07:00:00.000Z',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
          created: '2024-01-10T08:00:00.000Z',
        },
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(action.payload.threadDetail)
  })

  it('should return the thread detail with toggled upVote when given by UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Test 1',
      body: 'Ini cuma test',
      category: 'test',
      createdAt: '2024-01-10T07:00:00.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-10T08:00:00.000Z',
    }
    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    })
  })

  it('should return the thread detail with toggled downVote when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Test 1',
      body: 'Ini cuma test',
      category: 'test',
      createdAt: '2024-01-10T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-10T08:00:00.000Z',
    }
    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    })
  })

  it('should return the thread detail with new comment when given by CREATE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Test 1',
      body: 'Ini cuma test',
      category: 'test',
      createdAt: '2024-01-10T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-10T08:00:00.000Z',
    }
    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-1',
          body: 'test comment',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-10T08:00:00.000Z',
        },
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    })
  })

  it('should return the thread detail with toggle upVote comment when given by UP_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Test 1',
      body: 'Ini cuma test',
      category: 'test',
      createdAt: '2024-01-10T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'test comment',
          owner: {
            id: 'users-1',
            name: 'Socrates',
            email: 'socrates@gmail.com',
          },
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-10T08:00:00.000Z',
        },
      ],
      created: '2024-01-10T08:00:00.000Z',
    }
    const action = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    })
  })

  it('should return the thread detail with toggle downVote comment when given by DOWN_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Test 1',
      body: 'Ini cuma test',
      category: 'test',
      createdAt: '2024-01-10T07:00:00.000Z',
      ownerId: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          body: 'test comment',
          owner: {
            id: 'users-1',
            name: 'Socrates',
            email: 'socrates@gmail.com',
          },
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-10T08:00:00.000Z',
        },
      ],
      created: '2024-01-10T08:00:00.000Z',
    }
    const action = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    }

    // Action
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    })
  })
})
