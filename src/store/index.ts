import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fork, all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { HomeReducer, sagas as HomeSagas } from './ducks/Home'

const allSagas = [...HomeSagas]

const rootReducer = combineReducers({
  home: HomeReducer
})

function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)))
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

;(store as any).sagaTask = sagaMiddleware.run(rootSaga)

export default store
