import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'
import usersReducer from './users/reducer'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import threadsReducer from './threads/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import threadDetailReducer from './threadDetail/reducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
})

export default store
