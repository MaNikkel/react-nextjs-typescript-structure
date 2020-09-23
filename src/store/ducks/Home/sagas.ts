import {
  put,
  takeEvery,
  call,
  CallEffect,
  PutEffect,
  ForkEffect
} from 'redux-saga/effects'
import * as HOME_SERVICES from '../../../services/home'
import * as actions from './actions'
import { SETNAMEREQUEST } from './types'

export function* getAsyncName(): IterableIterator<CallEffect | PutEffect> {
  try {
    const res: string = yield call(HOME_SERVICES.getAsyncString)
    yield put(actions.setName(res))
  } catch (e) {
    throw new Error(e)
  }
}

export function* watchHome(): IterableIterator<ForkEffect> {
  yield takeEvery(SETNAMEREQUEST, getAsyncName)
}

export const sagas = [watchHome]
