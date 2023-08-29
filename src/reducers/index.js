import { combineReducers } from 'redux'
import counterReducer from './counter'
import postReducer from './post'

// combine reducer 通过combineReducers 把多个reducer进行合并
const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer
})

export default rootReducers