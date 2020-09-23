import { createStore, combineReducers } from 'redux'
import HomeReducer from './ducks/Home'

const rootReducer = combineReducers({
  home: HomeReducer
})

const store = createStore(rootReducer)

export default store
