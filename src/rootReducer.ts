import { combineReducers } from 'redux'
import { blogReducer } from './pages/dashBoard/reducer'
import { deleteReducer } from './pages/deleteBlog/reducer'

export const rootReducer =combineReducers({
    blogReducer,
    deleteReducer
})