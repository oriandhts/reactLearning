import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import rootReducers from '../reducers/index'



const store = createStore(rootReducers,
    compose(
        applyMiddleware(...[thunk]),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store